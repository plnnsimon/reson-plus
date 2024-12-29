<script lang="ts" setup>
import StatisticCard from '~/components/sections/statistics/statistic-card/StatisticCard.vue'

const currentItem = ref('brands')
const hoveredItem = ref<string | null>(null)

const statisticsData = {
  backgroundImage: '/img/statistic-image.png',
  experience: {
    mainTitle: '22',
    additionTitle: 'роки досвіду',
    additionText:
      'Ми спеціалізуємося на продажу найнеобхідніших товарів, які полегшують життя людей: від господарських та хімічних товарів до різноманітних.',
  },
  clients: {
    mainTitle: '97%',
    additionTitle: 'задоволених клієнтів',
    additionText:
      'Ми спеціалізуємося на продажу найнеобхідніших товарів, які полегшують життя людей.',
  },
  products: {
    mainTitle: '99%',
    additionTitle: 'наявності товару',
    additionText:
      'Ми спеціалізуємося на продажу найнеобхідніших товарів, які полегшують життя людей: від господарських та хімічних товарів до різноманітних видів світильників та електротоварів.',
  },
  brands: {
    mainTitle: '20+',
    additionTitle: 'брендів в асортименті',
    additionText:
      'Ми спеціалізуємося на продажу найнеобхідніших товарів, які полегшують життя людей: від господарських та хімічних товарів.',
  },
}

const backgroundImage = computed(() => `url(${statisticsData.backgroundImage})`)

function getItemData(slug: string) {
  return statisticsData[slug]
}

function setHoveredItem(slug: string | null) {
  currentItem.value = slug
}
</script>

<template>
  <div class="widget">
    <div class="widget__container">
      <div class="widget__block widget__block_left">
        <div
          :style="{ backgroundImage: backgroundImage }"
          class="widget__block-background"
        >
          <div class="widget__block-content">
            <StatisticCard
              v-bind="getItemData(currentItem)"
              show-addition-text
              secondary
              class="widget__card"
            />
          </div>
        </div>
      </div>

      <div class="widget__block widget__block_right">
        <StatisticCard
          v-bind="getItemData('experience')"
          :secondary="currentItem === 'experience'"
          class="widget__card"
          @pointerover="setHoveredItem('experience')"
        />

        <StatisticCard
          v-bind="getItemData('clients')"
          :secondary="currentItem === 'clients'"
          class="widget__card"
          @pointerover="setHoveredItem('clients')"
        />

        <StatisticCard
          v-bind="getItemData('products')"
          :secondary="currentItem === 'products'"
          class="widget__card"
          @pointerover="setHoveredItem('products')"
        />

        <StatisticCard
          v-bind="getItemData('brands')"
          :secondary="currentItem === 'brands'"
          class="widget__card"
          @pointerover="setHoveredItem('brands')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'statistics-widget';
</style>
