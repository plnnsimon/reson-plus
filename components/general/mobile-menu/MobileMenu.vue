<script setup lang="ts">
import BaseIcon from '~/components/ui/base-icon/BaseIcon.vue'

interface Props {
  opened: boolean
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:opened', val: boolean): void
}
const emit = defineEmits<Emits>()

import { useMenu } from '~/composables/menu/use-menu'

const { MENU_ITEMS, scrollToSection } = useMenu()

function scrollToSectionWrapper(sectionId?: string) {
  emit('update:opened', false)
  scrollToSection(sectionId)
}
</script>

<template>
  <div :class="{ 'mobile-menu_opened': props.opened }" class="mobile-menu">
    <div class="mobile-menu__container">
      <div class="mobile-menu__head">
        <img src="/img/logo1.png" alt="logo" class="mobile-menu__head-img" />

        <BaseIcon
          icon="icon-close"
          class="mobile-menu__head-icon"
          @click="emit('update:opened', false)"
        />
      </div>

      <nav class="mobile-menu__nav">
        <ul class="mobile-menu__nav-list">
          <li
            v-for="item in MENU_ITEMS"
            :key="item.key"
            class="mobile-menu__nav-item"
          >
            <a
              class="mobile-menu__nav-link body-typography"
              @click="scrollToSectionWrapper(item.key)"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'mobile-menu';
</style>
