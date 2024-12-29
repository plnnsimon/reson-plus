<script setup lang="ts">
import BaseButton from '~/components/ui/base-button/BaseButton.vue'
import BaseIcon from '~/components/ui/base-icon/BaseIcon.vue'
import MobileMenu from '~/components/general/mobile-menu/MobileMenu.vue'

import { useMenu } from '~/composables/menu/use-menu'

const { MENU_ITEMS, scrollToSection } = useMenu()
const mobileMenuOpened = ref(false)
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__head">
        <div class="header__logo">
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
            <a
              class="header__nav-link body-typography"
              @click="scrollToSection(item.key)"
            >
              {{ item.title }}
            </a>
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
