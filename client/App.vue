<template>
  <div id="app" class="wrapper">
    Hello world from front
    <header class="header">Header</header>
    <viewer class="main"></viewer>
    <folding-aside class="aside-1">
      Aside 1
      <socket-manager />
      <question />
    </folding-aside>
    <folding-aside class="aside-2">
      Aside 2
    </folding-aside>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
import './index.css';
import FoldingAside from './components/foldingAside.vue';
import SocketManager from './components/socketManager.vue';
import Viewer from './components/viewer.vue';
import Question from './components/question.vue';

export default {
  name: 'App',

  components: {
    FoldingAside,
    SocketManager,
    Viewer,
    Question,
  },
};
</script>
