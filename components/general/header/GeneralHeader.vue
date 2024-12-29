<script setup lang="ts">
import BaseButton from '~/components/ui/base-button/BaseButton.vue'
import BaseIcon from '~/components/ui/base-icon/BaseIcon.vue'
import MobileMenu from '~/components/general/mobile-menu/MobileMenu.vue'

import { type MenuItem, useMenu } from '~/composables/menu/use-menu'

const route = useRoute()
const router = useRouter()
const { MENU_ITEMS, scrollToSection } = useMenu()
const mobileMenuOpened = ref(false)

async function scrollToSectionWrapper(item: MenuItem) {
  const isMainPage = route.path.split('/')[1] === ''
  if (!isMainPage) {
    await router.push('/')
  }

  setTimeout(() => {
    scrollToSection(item.key)
  }, 100)
}

async function goToMainPage() {
  await router.push('/')
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__head">
        <div class="header__logo" @click="goToMainPage">
          <img src="/img/logo1.png" alt="logo" class="header__logo-img" />
        </div>

        <BaseIcon
          icon="icon-menu"
          class="header__head-icon"
          @click="mobileMenuOpened = true"
        />
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            v-for="item in MENU_ITEMS"
            :key="item.key"
            class="header__nav-item"
          >
            <NuxtLink
              :to="item.link"
              class="header__nav-link body-typography"
              @click="scrollToSectionWrapper(item)"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <BaseButton class="header__action"> Зателефонувати </BaseButton>

      <MobileMenu v-model:opened="mobileMenuOpened" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import 'header';
</style>
