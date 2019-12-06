
/*var natural = require('natural');
const PorterStemmerRu = require('./node_modules/natural/lib/natural/stemmers/porter_stemmer_fr');
var classifier = new natural.BayesClassifier(PorterStemmerRu);
*/
'use strict';

const Hapi = require('@hapi/hapi');
const path = require('path');
const Inert = require('inert');

const init = async () => {
  const frontServer = Hapi.server({
    port: 8080,
    host: 'localhost',
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
        path: path.join(__dirname, 'public'),
      },
    },
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