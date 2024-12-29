<script setup lang="ts">
import { useSlots } from '@vue/runtime-core'

const slots = useSlots()

type ButtonSize = 'small' | 'medium' | 'large' | 'micro'
type ButtonTag = 'button' | 'div' | 'a'

interface ButtonProps {
  title?: string
  tag?: ButtonTag
  disabled?: boolean
  size?: ButtonSize
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  title: '',
  tag: 'button',
})
</script>

<template>
  <component
    v-bind="$attrs"
    :is="props.tag"
    :class="[{ disabled }, props.size]"
    class="button"
  >
    <div class="button__inner h4-button">
      <slot>
        <p v-if="props.title" class="button__inner-text h4-button">
          {{ props.title }}
        </p>
      </slot>

      <div v-if="slots.icon" class="button__inner-icon">
        <slot name="icon" />
      </div>
    </div>
  </component>
</template>

<style scoped lang="scss">
@import './base-button';
</style>
