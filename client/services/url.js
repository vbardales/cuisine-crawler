import io from 'socket.io-client';
import EventEmitter from 'events';
import _ from 'lodash';

export default class UrlService extends EventEmitter {
  connected = false;

  constructor() {
    super();

    this.socket = io('http://localhost:3000', {
      autoConnect: false
    });
    this.onbeforeunload = null;
  }

  start() {
    this.socket.open();
    this.socket.on('joined', (data) => {
      this.emit('connected');
      this.connected = true;
    });

    this.onbeforeunload = window.onbeforeunload = () => {
      this.emit('disconnected');
      this.connected = false;
    }
  }

  stop() {
    this.socket.close();
    window.onbeforeunload = _.noop;
    this.emit('disconnected');
    this.connected = false;
  }
}
