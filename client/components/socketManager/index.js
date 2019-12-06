const socket = io('http://localhost:3000');

Vue.component('socket-manager', {
  template: `
  <div id="socket-manager">
    <p v-if="!$url.connected">Not yet connected</p>
    <p v-if="$url.connected">Ready</p>
  </div>`,
  props: ['className'],

  data: () => ({
    connected: false,
  }),

  created() {
    socket.on('joined', (data) => {
      console.log('Joined');
      // this.connected = true;
      this.$url.connected = true;
    });
  },
});
