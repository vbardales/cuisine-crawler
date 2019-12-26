const EventEmitter = require('events');

export default class Page extends EventEmitter {
  constructor(url, content) {
    super();

    this.url = url;
    this.content = content;
  }

  async process() {
    console.log(`Processing ${this.url}`);
    this.sendAQuestion();
  }

  sendAQuestion() {
    console.log(`Got a question for ${this.url}`);
    this.emit('question');
  }

  answer() {
    console.log(`Got an answer from ${this.url}`);
    this.emit('done');
  }
}
