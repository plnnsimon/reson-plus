<script setup lang="ts">
interface Props {}

const props = defineProps<Props>()

definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <div class="news">
    <div class="news__container">
      <h2 class="h2">Coming soon...</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'index';
</style>
