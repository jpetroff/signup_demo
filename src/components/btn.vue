<template lang="html">
  <label v-bind:for="focusId" class="btn" v-on:click="onClick">
    <slot></slot>
  </label>
</template>

<script>
w.Components['btn'] = {
  template: "<%= template %>",
  props: ['focusId', 'text'],
  methods: {
    onClick: function() {
      this.$emit('click');
    }
  }
}

Vue.component('btn', w.Components['btn']);
</script>

<style lang="less">
</style>
