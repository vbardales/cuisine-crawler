<template>
  <div id="app" class="wrapper">
    Hello world from front
    <header class="header">Header</header>
    <viewer class="main"></viewer>
    <folding-aside class="aside-1">
      Aside 1
      <socket-manager />
    </folding-aside>
    <folding-aside class="aside-2">
      Aside 2
    </folding-aside>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
console.log('Hello from console');

import './index.css';
import FoldingAside from './components/foldingAside.vue';
import SocketManager from './components/socketManager.vue';
import Viewer from './components/viewer.vue';
// import './services/url';

export default {
  name: 'App',

  components: {
    FoldingAside,
    SocketManager,
    Viewer,
  },

  /*data: {
    newMessage: null,
    messages: [],
    ready: false,
    info: [],
    connections: 0,
  },

  created() {
    /*window.onbeforeunload = () => {
      socket.emit('leave', this.username);
    }

    /*socket.on('chat-message', (data) => {
      this.messages.push({
          message: data.message,
          type: 1,
          user: data.user,
      });
    });
    socket.on('typing', (data) => {
        this.typing = data;
    });
    socket.on('stopTyping', () => {
        this.typing = false;
    });*/
    /*socket.on('joined', (data) => {
      console.log('joined')
        /*this.info.push({
            username: data,
            type: 'joined'
        });
        setTimeout(() => {
            this.info = [];
        }, 5000);*/
    /*});
    socket.on('leave', (data) => {
      console.log('leave')
        /*this.info.push({
            username: data,
            type: 'left'
        });
        setTimeout(() => {
            this.info = [];
        }, 5000);*/
    /*});
    socket.on('connections', (data) => {
      console.log('connections')
        /*this.connections = data;*/
    /*});
},*/
};
</script>
