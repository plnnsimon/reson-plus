<script setup lang="ts">
import type { SwiperOptions } from 'swiper/types'
import type { Swiper } from 'swiper/types'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'

interface Props {
  items: unknown
  options?: SwiperOptions
}
const props = defineProps<Props>()

const swiperInstance = ref<Swiper | null>(null)
const onSwiper = (swiper: Swiper) => {
  console.log(swiper, ' swiper')
  swiperInstance.value = swiper
}
</script>

<template>
  <div class="slider">
    <swiper-container
      v-bind="$attrs"
      :options="props.options"
      :modules="[Autoplay, Navigation]"
      class="slider__component"
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="(item, index) in props.items"
        :key="index"
        class="slider__slide"
      >
        <slot :item="item" :key="index" name="slide" />
      </swiper-slide>
    </swiper-container>

    <slot name="navigation" :swiperInstance="swiperInstance" />
  </div>
</template>

<style lang="scss" scoped>
@import 'base-slider';
</style>
