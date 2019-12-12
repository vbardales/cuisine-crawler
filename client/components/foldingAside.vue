<template>
<aside
  class="aside"
  :class="{ 'aside-closed': isClosed, [className]: true }"
>
  <button @click="isClosed = !isClosed">Toggle</button>
  <slot></slot>
</aside>
</template>

<script>
export default {
  name: 'folding-aside',

  props: ['className'],

  data: () => ({
    isClosed: true,
  }),
};
</script>
