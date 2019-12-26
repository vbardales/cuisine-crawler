import io from 'socket.io-client';
import EventEmitter from 'events';
import _ from 'lodash';

export default class UrlService extends EventEmitter {
  connected = false;
  initialized = false;

  constructor() {
    super();

    this.socket = io('http://localhost:3000', {
      autoConnect: false
    });
  }

  start() {
    if (this.connected) {
      return;
    }

    this.socket.open();

    if (this.initialized) {
      return;
    }

    this.socket.on('joined', (data) => {
      this.emit('connected');
      this.connected = true;
    });

    this.socket.on('question', (e) => {
      switch(e.type) {
        case 'url': {
          this.emit('url', e);
          break;
        }
        default: {
          console.error('Unhandled question', e);
        }
      }
    });

    window.onbeforeunload = () => {
      this.emit('disconnected');
      this.connected = false;
    };

    this.initialized = true;
  }

  stop() {
    if (!this.connected) {
      return;
    }

    this.socket.close();
    this.emit('disconnected');
    this.connected = false;
  }

  answer(question, answer) {
    console.log('SENDING AN ANSWER')
    this.socket.emit('answer', {
      url: question.url,
      answer,
    });
  }
}
