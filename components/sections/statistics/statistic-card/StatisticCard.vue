<script lang="ts" setup>
interface Props {
  mainTitle: string
  additionTitle: string
  additionText: string
  showAdditionText?: boolean
  secondary?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <div
    :class="{ 'statistic-card_secondary': props.secondary }"
    class="statistic-card"
  >
    <div class="statistic-card__head">
      <div class="statistic-card__title statistic-card__title_main h1">
        {{ props.mainTitle }}
      </div>

      <div class="statistic-card__title statistic-card__title_addition h2">
        {{ props.additionTitle }}
      </div>
    </div>

    <div
      v-if="props.showAdditionText"
      class="statistic-card__content body-typography"
    >
      {{ props.additionText }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'statistic-card';
</style>
