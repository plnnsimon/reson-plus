<script setup></script>

<template>
  <div class="landing-layout">
    <GeneralHeader class="landing-layout__header" />

    <main class="landing-layout__content">
      <slot />
    </main>

    <GeneralFooter class="landing-layout__footer" />

    <GeneralGlobalIconsComponent class="landing-layout__icons" />
  </div>
</template>

<style lang="scss" scoped>
.landing-layout {
  &__content {
    overflow: hidden;
  }

  &__icons {
    display: none;
  }
}
</style>
