
/*var natural = require('natural');
const PorterStemmerRu = require('./node_modules/natural/lib/natural/stemmers/porter_stemmer_fr');
var classifier = new natural.BayesClassifier(PorterStemmerRu);
*/
'use strict';

const Hapi = require('@hapi/hapi');
const path = require('path');
const Inert = require('inert');
const socketIO = require('socket.io');
const PageManager = require('./components/pageManager').default;

const init = async () => {
  const frontServer = Hapi.server({
    port: 8080,
    host: 'localhost',
    state: {
      ignoreErrors: true
    },
  });
  const backServer = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await frontServer.register(Inert);

  backServer.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    }
  });

  frontServer.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, '..', 'dist'),
      },
    },
  });

  const pageManager = new PageManager();

  const io = socketIO(backServer.listener);
  io.on('connection', async function (socket) {
    console.log('Connected', socket.id);
    socket.emit('joined');

    pageManager.on('next', async () => {
      socket.page = await pageManager.get();

      socket.questionListener = async () => {
        socket.emit('question', {
          type: 'url',
          url: socket.page.url,
          body: socket.page.content,
        });

        socket.once('answer', (answer) => {
          if (answer.url !== socket.page.url) {
            return;
          }

          socket.page.answer(answer);
        });
      };
      socket.page.on('question', socket.questionListener);

      await socket.page.process();
    });


    pageManager.setUrl('https://www.marmiton.org/');
    await pageManager.start();

    socket.on('disconnect', async () => {
      console.log('Disconnected', socket.id);
      await pageManager.stop();
      socket.page && socket.page.removeListener('question', socket.questionListener);
    });
  });

  await Promise.all([
    frontServer.start()
      .then(() => console.log('Front server running on %s', frontServer.info.uri))
    ,
    backServer.start()
      .then(() => console.log('Back server running on %s', backServer.info.uri))
    ,
  ]);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
