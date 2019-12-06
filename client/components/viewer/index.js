Vue.component('viewer', {
  template: `
  <article>
    <p v-if="!url">No data to view for now</p>
    <p v-if="url">Data ARE COMING!</p>
  </article>
  `,

  data: () => ({
    url: null,
  }),
});
