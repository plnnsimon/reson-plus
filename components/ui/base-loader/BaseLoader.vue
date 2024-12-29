<script setup lang="ts">
interface Props {
  active: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div v-if="props.active" class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
@import 'base-loader';
</style>
