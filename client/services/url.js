class UrlService {
  connected = false;
}

Object.defineProperty(Vue.prototype, '$url', { value: new UrlService() });
