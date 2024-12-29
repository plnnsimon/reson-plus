<script setup lang="ts">
import { computed, watch } from 'vue'
import { useField } from 'vee-validate'

interface Props {
  value: number | string | null
  title?: string
  placeholder?: string
  name?: string
  rules?: (value: unknown) => boolean | string | Promise<boolean | string>
  type?: string
  localInputType?: 'number'
  isPassword?: boolean
  borderRadius?: string
  centeredValue?: boolean
  mask?: string
  error?: string
  disabled?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits([
  'update:value',
  'update:type',
  'update:errorMessage',
  'onInput',
])

const nameUseField = computed(() => (props.name ? props.name : ''))
const { value: modelValue, errorMessage } = useField(nameUseField, undefined, {
  initialValue: props.value,
})

watch(
  () => props.value,
  (val) => {
    modelValue.value = val
  }
)

// const modelValue = computed({
//   get() {
//     return value.value
//   },
//   set(val) {
//     emit('update:value', val)
//   },
// })
const inputType = computed(() => (props.type ? props.type : 'text'))

function onInput(event: Event) {
  event.preventDefault()
  event.stopPropagation()

  const target = event.target as HTMLInputElement
  modelValue.value = target.value
  // emit('onInput', target.value)
  emit('update:value', target.value, event)
}
</script>

<template>
  <div
    v-bind="$attrs"
    :class="{
      'centered-value': props.centeredValue,
    }"
    class="input"
  >
    <label v-if="props.title" class="input__title body-typography" for="input">
      {{ props.title }}
    </label>

    <div class="input__container" :class="{ disabled }">
      <slot name="actions-before" />

      <input
        v-bind="$attrs"
        title=""
        id="input"
        :disabled="disabled"
        :value="modelValue"
        :type="inputType"
        :name="name"
        class="input__field body-typography"
        :placeholder="props.placeholder"
        @input="onInput"
        @keydown.enter.stop.prevent
      />

      <div v-if="errorMessage || props.error" class="input__container-error">
        {{ errorMessage || props.error }}
      </div>

      <slot name="actions-after" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'base-input';
</style>
