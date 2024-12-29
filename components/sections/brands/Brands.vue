<script setup lang="ts">
import SimpleTitleSlider from '~/components/shared/sliders/simple-title-slider/SimpleTitleSlider.vue'

const clients = [
  {
    image: 'img/brand-1.png',
  },
  {
    image: 'img/brand-2.png',
  },
  {
    image: 'img/brand-3.png',
  },
  {
    image: 'img/brand-4.png',
  },
  {
    image: 'img/brand-5.png',
  },
]
</script>

<template>
  <div class="clients">
    <SimpleTitleSlider :items="clients">
      <template #title> Бренди з якими ми працюємо: </template>
    </SimpleTitleSlider>
  </div>
</template>

<style scoped lang="scss">
@import 'brands';
</style>
