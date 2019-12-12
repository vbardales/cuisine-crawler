import Vue from 'vue';
import App from './App.vue';

import UrlService from './services/url';

Object.defineProperty(Vue.prototype, '$url', { value: new UrlService() });

new Vue({
  render: h => h(App)
}).$mount('#app');
