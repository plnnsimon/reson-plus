<script setup lang="ts">
type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const props = defineProps<{ headerTag: TitleLevel }>()
</script>

<template>
  <component
    :is="props.headerTag"
    :class="props.headerTag"
    class="section-title"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss">
@import './base-title';
</style>
