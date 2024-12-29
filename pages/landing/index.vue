<script setup>
import BaseButton from '~/components/ui/base-button/BaseButton.vue'
import BaseSlider from '~/components/ui/base-slider/BaseSlider.vue'
// import BaseTitle from '~/components/ui/base-title/BaseTitle.vue'
import StatisticsWidget from '~/components/sections/statistics/statistics-widget/StatisticsWidget.vue'

import { ref, onMounted } from 'vue'
import OurClients from '~/components/sections/our-clients/OurClients.vue'
import PricesSection from '~/components/sections/prices-section/PricesSection.vue'
import ProductsSection from '~/components/sections/products-section/ProductsSection.vue'
import Brands from '~/components/sections/brands/Brands.vue'
import NewsSection from '~/components/sections/news-section/NewsSection.vue'
import FindUs from '~/components/sections/find-us/FindUs.vue'
import PriceListButton from '~/components/shared/form-components/price-list-button/PriceListButton.vue'

definePageMeta({
  layout: 'landing',
})

const content = ref([])

onMounted(async () => {
  // const res = await $fetch('/api/content')
  // console.log(res, ' res')
  // content.value = res
})

const backgroundImages = [
  'img/product-background-1.png',
  'img/product-background-2.png',
  'img/product-background-3.png',
]

const mainProductsPreview = [
  {
    title: 'Світ комфорту та світла!',
    description:
      'Ми прагнемо до того, щоб кожен наш клієнт відчував найкраще від нашої продукції. Наші експерти завжди готові надати вам індивідуальні рекомендації та консультації, аби ваш вибір був максимально адаптований до вашого смаку.',
    img: 'img/product-1.png',
  },
  {
    title: 'Крем-мило SeLan Ajoure CACAO',
    description:
      'Екстракт какао робить шкіру пружною, еластичною і зволоженою.',
    img: 'img/product-3.png',
  },
  {
    title: 'Датчик руху LUXEL 0,5Вт 3-2000 LUX ',
    description:
      'Реагує на рух і миттєво запускає роботу підключеного до нього пристрою автоматично визначає день та ніч.',
    img: 'img/product-2.png',
  },
]

function getBackgroundImage(item) {
  const index = mainProductsPreview.indexOf(item)
  if (index > -1) {
    const imageIndex = index % backgroundImages.length
    return `url(${backgroundImages[imageIndex || 0]})`
  }
}

const options = {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
}
</script>

<template>
  <div class="landing-page">
    <section id="main" class="landing-page__section landing-page__section_main">
      <div class="landing-page__product-slider">
        <client-only>
          <BaseSlider v-bind="options" :items="mainProductsPreview">
            <template #slide="{ item }">
              <div class="landing-page__product-slide">
                <div class="landing-page__block">
                  <h2 class="landing-page__block-title h1">
                    {{ item.title }}
                  </h2>

                  <p class="landing-page__block-text body-typography">
                    {{ item.description }}
                  </p>

                  <PriceListButton
                    class="landing-page__block-action landing-page__block-action_desktop"
                  />
                </div>

                <div
                  :style="{ backgroundImage: getBackgroundImage(item) }"
                  class="landing-page__product-slide-background"
                >
                  <img
                    :src="item.img"
                    alt="slide"
                    class="landing-page__product-slide-image"
                  />
                </div>

                <PriceListButton
                  class="landing-page__block-action landing-page__block-action_mobile"
                />
              </div>
            </template>
          </BaseSlider>
        </client-only>
      </div>
    </section>

    <section
      id="about"
      class="landing-page__section landing-page__section_about"
    >
      <div class="landing-page__section-head">
        <h2 class="landing-page__section-title h1">Чому саме ми?</h2>

        <p class="landing-page__section-text body-typography">
          За 22 роки на ринку України, Торгівельно-виробнича компанія "Резон
          Плюс" досягла вражаючих результатів. Наша мета - забезпечити вас
          найкращою якістю та широким асортиментом продукції, яка відповідає
          сучасним стандартам та технологіям.
        </p>
      </div>

      <div class="landing-page__statistics">
        <StatisticsWidget />
      </div>
    </section>

    <section class="landing-page__section landing-page__section_clients">
      <OurClients />
    </section>

    <section
      id="prices"
      class="landing-page__section landing-page__section_prices"
    >
      <PricesSection />
    </section>

    <section
      id="products"
      class="landing-page__section landing-page__section_products"
    >
      <ProductsSection />
    </section>

    <section class="landing-page__section landing-page__section_brands">
      <Brands />
    </section>

    <section id="news" class="landing-page__section landing-page__section_news">
      <NewsSection />
    </section>

    <section class="landing-page__section landing-page__section_find-us">
      <FindUs />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import 'landing';
</style>
