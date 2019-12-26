const puppeteer = require('puppeteer');
const EventEmitter = require('events');
const Page = require('../page').default;

export default class PageManager extends EventEmitter {
  constructor() {
    super();

    this.currentUrl = null;
    this.page = null;
  }

  async start() {
    this.browser = await puppeteer.launch();
    this.emit('next');
  }

  async stop() {
    await this.browser.close();
    this.removeAllListeners();
  }

  setUrl(url) {
    this.currentUrl = url;
  }

  async get() {
    if (this.page) {
      return this.page;
    }

    console.log(`Scanning ${this.currentUrl}`);
    const browserPage = await this.browser.newPage();
    await browserPage.goto(this.currentUrl);
    const content = await browserPage.content();

    console.log(`Creating a new Page for ${this.currentUrl}`);
    this.page = new Page(this.currentUrl, content);
    this.page.on('done', () => {
      console.log('DONE');
      this.page = null;
    });
    return this.page;
  }
}
