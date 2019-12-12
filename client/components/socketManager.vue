<template>
<div id="socket-manager">
  <div v-if="!connected">
    <p>Not yet connected</p>
    <button @click="connect">Connect?</button>
  </div>
  <div v-if="connected">
    <p>Ready</p>
    <button @click="disconnect">Disconnect?</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'socket-manager',

  data() {
    return {
      connected: false,
    };
  },

  methods: {
    connect: function() {
      this.$url.start();
    },
    disconnect: function() {
      this.$url.stop();
    },
  },

  created() {
    this.$url.on('connected', () => this.connected = true);
    this.$url.on('disconnected', () => this.connected = false);
  },
};
</script>
