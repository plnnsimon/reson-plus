<script setup lang="ts">
import BaseButton from '~/components/ui/base-button/BaseButton.vue'
import PriceListButton from '~/components/shared/form-components/price-list-button/PriceListButton.vue'

interface Props {}

const props = defineProps<Props>()

const items = [
  {
    icon: 'icon-lantern',
    title: 'Світильники',
  },
  {
    icon: 'icon-lamp',
    title: 'Лампи',
  },
  {
    icon: 'icon-spotlight',
    title: 'Прожектори',
  },
  {
    icon: 'icon-chemicals',
    title: 'Побутова хімія',
  },
  {
    icon: 'icon-electrical',
    title: 'Електро-фурнітура',
  },
  {
    icon: 'icon-household',
    title: 'Господарські товари',
  },
]
</script>

<template>
  <div class="prices">
    <div class="prices__container">
      <div class="prices__block prices__block_left">
        <h2 class="prices__block-title h1">Ціни, що вас зацікавлять</h2>

        <p class="prices__block-text body-typography">
          Ознайомтесь з нашим асортиментом
        </p>

        <PriceListButton
          class="prices__block-button prices__block-button_desktop"
        />
      </div>

      <div class="prices__block prices__block_right">
        <div class="prices__products">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            :class="{ [`prices__product_${idx + 1}`]: true }"
            class="prices__product"
          >
            <img
              :src="`/icons/${item.icon}.png`"
              class="prices__product-image"
              alt="product"
            />

            <div class="prices__product-title h4">
              {{ item.title }}
            </div>
          </div>
        </div>

        <div class="prices__block-background" />

        <PriceListButton
          class="prices__block-button prices__block-button_mobile"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'prices-section';
</style>
