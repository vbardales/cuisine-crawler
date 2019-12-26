<template>
<article>
  <p v-if="!url">No data to view for now</p>
  <iframe v-if="url" v-bind:srcdoc="rawHtml" width="1500" height="1500"></iframe>
</article>
</template>

<script>
export default {
  name: 'viewer',

  data: () => ({
    url: null,
    rawHtml: null
  }),

  created() {
    this.$url.on('url', (e) => {
      this.url = e.url;
      this.rawHtml = e.body;
    });

    this.$url.on('disconnected', () => {
      this.url = null;
      this.rawHtml = null;
    });
  },
};
</script>
