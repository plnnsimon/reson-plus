<script setup lang="ts">
import SimpleTitleSlider from '~/components/shared/sliders/simple-title-slider/SimpleTitleSlider.vue'

const clients = [
  {
    image: 'img/client-1.png',
  },
  {
    image: 'img/client-2.png',
  },
  {
    image: 'img/client-3.png',
  },
  {
    image: 'img/client-4.png',
  },
  {
    image: 'img/client-5.png',
  },
]
</script>

<template>
  <div class="clients">
    <SimpleTitleSlider :items="clients">
      <template #title> Наші клієнти: </template>
    </SimpleTitleSlider>
  </div>
</template>

<style scoped lang="scss">
@import 'our-clients';
</style>
