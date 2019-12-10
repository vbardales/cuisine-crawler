<template>
<div id="socket-manager">
  Coucou c'est nous
  <p v-if="!connected">Not yet connected</p>
  <p v-if="connected">Ready</p>
</div>
</template>

<script>
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export default {
  name: 'socket-manager',

  data() {
    return {
      connected: false,
    };
  },

  created() {
    socket.on('joined', (data) => {
      console.log('Joined');
      this.connected = true;
    });
  },
};
</script>
