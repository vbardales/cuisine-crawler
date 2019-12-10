<template>
<article>
  <p v-if="!url">No data to view for now</p>
  <p v-if="url">Data ARE COMING!</p>
</article>
</template>

<script>
export default {
  name: 'viewer',

  data() {
    return {
      url: null,
    };
  },
};
</script>
