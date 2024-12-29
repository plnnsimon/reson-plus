<script setup lang="ts">
import BaseSlider from '~/components/ui/base-slider/BaseSlider.vue'

import type { SwiperOptions } from 'swiper/types'

interface ItemWithImage {
  image: string
}

interface Props {
  items: ItemWithImage[] | any[]
  imageAlt?: string
  sliderOptions?: SwiperOptions
}
const props = defineProps<Props>()

function getKey(item: any) {
  return props.items.indexOf(item)
}

const options: SwiperOptions = {
  loop: true,
  spaceBetween: 25,
  slidesPerView: 'auto',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  ...props.sliderOptions,
}
</script>

<template>
  <div class="simple-slider">
    <h2 class="simple-slider__title h1">
      <slot name="title" />
    </h2>

    <div class="simple-slider__slider">
      <client-only>
        <BaseSlider
          v-bind="options"
          :items="props.items"
          class="simple-slider__slider-component"
        >
          <template #slide="{ item }">
            <slot name="slider-item" :item="item">
              <div :key="getKey(item)" class="simple-slider__item">
                <img
                  :src="item?.image"
                  :alt="props.imageAlt || 'simple-image'"
                  class="simple-slider__item-image"
                />
              </div>
            </slot>
          </template>
        </BaseSlider>
      </client-only>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'simple-title-slider';
</style>
