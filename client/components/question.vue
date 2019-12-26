<template>
<div v-if="enabled">
  <p v-if="!question">No question for now</p>
  <div v-if="question">
    <p>Is it a recipe?</p>
    <button @click="yes()">Yes</button>
    <button @click="no()">No</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'question',

  data: () => ({
    enabled: false,
    question: null,
  }),

  methods: {
    yes: function () {
      console.log('YES');
      this.$url.answer(this.question, true);
    },
    no: function () {
      console.log('NO');
      this.$url.answer(this.question, false);
    },
  },

  created() {
    this.$url.on('connected', (e) => {
      this.enabled = true;
    });

    this.$url.on('url', (e) => {
      this.question = e;
    });

    this.$url.on('disconnected', () => {
      this.question = null;
      this.enabled = false;
    });
  },
};
</script>
