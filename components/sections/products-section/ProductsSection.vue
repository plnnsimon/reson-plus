<script setup lang="ts">
import BaseSlider from '~/components/ui/base-slider/BaseSlider.vue'
import type { Swiper, SwiperOptions } from 'swiper/types'
import BaseIcon from '~/components/ui/base-icon/BaseIcon.vue'

interface Props {}

const props = defineProps<Props>()

const items = [
  {
    image: 'img/product-image-1.png',
    title: 'Лампа свічка Іскра ДС 40 Вт Е14 матована індивідуальне пакування',
    id: '101459',
    price: '17.55',
  },
  {
    image: 'img/product-image-2.png',
    title: 'Серветки вологі "SuperFresh" 120 шт. для дітей клапан',
    id: '100744',
    price: '34.56',
  },
  {
    image: 'img/product-image-1.png',
    title: 'Лампа свічка Іскра ДС 40 Вт Е14 матована індивідуальне пакування',
    id: '101459',
    price: '17.55',
  },
  {
    image: 'img/product-image-2.png',
    title: 'Серветки вологі "SuperFresh" 120 шт. для дітей клапан',
    id: '100744',
    price: '34.56',
  },
  {
    image: 'img/product-image-1.png',
    title: 'Лампа свічка Іскра ДС 40 Вт Е14 матована індивідуальне пакування',
    id: '101459',
    price: '17.55',
  },
  {
    image: 'img/product-image-2.png',
    title: 'Серветки вологі "SuperFresh" 120 шт. для дітей клапан',
    id: '100744',
    price: '34.56',
  },
]

const options: SwiperOptions = {
  spaceBetween: 30,
  slidesPerView: 'auto',
  loop: true,
}

function setNavAction(swiper: Swiper | null, action: 'prev' | 'next') {
  if (!swiper) {
    console.warn('Swiper is not defined')
    return
  }

  console.log(swiper, ' swiper')

  action === 'prev' ? swiper.slidePrev() : swiper.slideNext()
}
</script>

<template>
  <div class="products">
    <client-only>
      <BaseSlider v-bind="options" :items="items" class="products__slider">
        <template #slide="{ item }">
          <div class="products__card">
            <img :src="item.image" alt="" class="products__card-image" />

            <div class="products__card-title h4-button">
              {{ item.title }}
            </div>

            <div class="products__card-id body-typography">
              Артикул:
              {{ item.id }}
            </div>

            <div class="products__card-price h3">{{ item.price }} грн.</div>
          </div>
        </template>

        <template #navigation="{ swiperInstance }">
          <div class="products__slider-navigation">
            <BaseIcon
              icon="icon-chevron-left"
              class="products__slider-icon products__slider-icon_left"
              @click="setNavAction(swiperInstance, 'prev')"
            />

            <BaseIcon
              icon="icon-chevron-left"
              class="products__slider-icon products__slider-icon_right"
              @click="setNavAction(swiperInstance, 'next')"
            />
          </div>
        </template>
      </BaseSlider>
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
@import 'products-section';
</style>
