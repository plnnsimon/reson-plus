<script setup lang="ts">
import BaseButton from '~/components/ui/base-button/BaseButton.vue'
import PriceListButton from '~/components/shared/form-components/price-list-button/PriceListButton.vue'

interface Props {}
const props = defineProps<Props>()
</script>

<template>
  <div class="news">
    <div class="news__container">
      <h2 class="news__title h1">Вам також може бути цікаво</h2>

      <div class="news__content">
        <div class="news__block">
          <h3 class="news__block-title h3">Світлодіодні лампи оптом</h3>

          <PriceListButton class="news__block-action" />
        </div>

        <div class="news__block">
          <h3 class="news__block-title h3">
            Світлодіодні панелі як заміна растрових світильників
          </h3>

          <BaseButton class="news__block-action"> Детальніше </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'news-section';
</style>
