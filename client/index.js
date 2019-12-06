console.log('Hello from console')

Vue.component('folding-aside', {
  template: `<aside
    class="aside"
    v-bind:class="{ 'aside-closed': isClosed, [className]: true }"
  >
    <button v-on:click="isClosed = !isClosed">Toggle</button>
    <slot></slot>
  </aside>`,
  props: ['className'],
  data: () => ({
    isClosed: true,
  }),
});

const app = new Vue({
  el: '#app',
});
