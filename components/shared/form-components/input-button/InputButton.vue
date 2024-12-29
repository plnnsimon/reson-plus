<script setup lang="ts">
import BaseInput from '~/components/ui/base-input/BaseInput.vue'
import BaseButton from '~/components/ui/base-button/BaseButton.vue'
import BaseIcon from '~/components/ui/base-icon/BaseIcon.vue'
import BaseLoader from '~/components/ui/base-loader/BaseLoader.vue'

type PropsValue = string | number | null

interface Props {
  title?: string
  placeholder: string
  value: PropsValue
  disabled?: boolean
  loading?: boolean
}
const props = defineProps<Props>()

interface Emits {
  (e: 'set-action'): void
  (e: 'update:value', val: PropsValue): void
}
const emit = defineEmits<Emits>()
</script>

<template>
  <div class="input-button">
    <BaseInput
      :value="props.value"
      :title="props.title"
      :placeholder="props.placeholder"
      :disabled="props.loading"
      class="input-button__input"
      name="mail"
      @update:value="(val) => emit('update:value', val)"
    />

    <div class="input-button__button">
      <BaseButton
        :disabled="props.disabled"
        class="input-button__button-component"
        @click="emit('set-action')"
      >
        <BaseIcon icon="icon-chevron-right" class="input-button__icon" />
      </BaseButton>

      <BaseLoader
        :active="props.loading"
        class="input-button__button-loading"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'input-button';
</style>
