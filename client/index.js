console.log('Hello from console');


const app = new Vue({
  el: '#app',
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
});
