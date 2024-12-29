<script setup lang="ts">
import { computed } from '@vue/runtime-core'

const props = defineProps<{
  icon: string
}>()

const icon = computed(() => `#${props.icon}`)
</script>
<template>
  <svg class="icon" v-bind="$attrs">
    <use :href="icon" />
  </svg>
</template>

<style lang="scss" scoped>
.icon {
  // cursor: pointer;
}
</style>
