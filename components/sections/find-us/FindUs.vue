<script setup lang="ts">
import SimpleTitleSlider from '~/components/shared/sliders/simple-title-slider/SimpleTitleSlider.vue'

const clients = [
  {
    image: 'img/find-us-1.png',
  },
  {
    image: 'img/find-us-2.png',
  },
  {
    image: 'img/find-us-3.png',
  },
  {
    image: 'img/find-us-4.png',
  },
]
</script>

<template>
  <div class="clients">
    <SimpleTitleSlider :items="clients">
      <template #title> Нас можна знайти у: </template>
    </SimpleTitleSlider>
  </div>
</template>

<style scoped lang="scss">
@import 'find-us';
</style>
