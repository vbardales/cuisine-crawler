<template>
<aside
  class="aside"
  v-bind:class="{ 'aside-closed': isClosed, [className]: true }"
>
  <button v-on:click="isClosed = !isClosed">Toggle</button>
  <slot></slot>
</aside>
</template>

<script>
export default {
  name: 'folding-aside',

  props: ['className'],

  data() {
    return {
      isClosed: true,
    };
  },
};
</script>
