<script setup lang="ts">
import BaseButton from '~/components/ui/base-button/BaseButton.vue'

interface Props {}
const props = defineProps<Props>()

function redirectToPriceList() {}
</script>

<template>
  <BaseButton class="button" @click="redirectToPriceList">
    <template #default>
      <p class="button__title h4-button">Переглянути прайс-лист</p>
    </template>
  </BaseButton>
</template>

<style lang="scss" scoped>
@import 'price-list-button';
</style>
