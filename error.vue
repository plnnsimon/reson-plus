<script lang="ts" setup>
import { useError } from 'nuxt/app'

const error = useError()
</script>

<template>
  <NuxtLayout name="404">
    <div class="error">
      <h1 class="error__title">{{ error?.statusCode }}</h1>

      <p class="error__message">
        {{ error?.message }}
      </p>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.error {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__title {
    font-size: 10rem;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  &__message {
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-align: center;
  }
}
</style>
