<script setup lang="ts">
import InputButton from '~/components/shared/form-components/input-button/InputButton.vue'

import { useMenu } from '~/composables/menu/use-menu'
import * as yup from 'yup'
import { useEmailTelegram } from '~/composables/logic/use-email-telegram'
import BaseIcon from '~/components/ui/base-icon/BaseIcon.vue'

const { MENU_ITEMS, CONTACTS, scrollToSection, getLinkAttributes } = useMenu()
const { handleFormSubmit } = useEmailTelegram()

const isLoading = ref(false)
const mail = ref('')

const { errors, handleSubmit } = useForm({
  validationSchema: {
    mail: yup
      .string()
      .transform((val, orig) => (orig == '' ? undefined : val))
      .email('Уведіть валідну пошту')
      .required('Поле обов`язкове'),
  },
})

const isErrors = computed(() => {
  return !!Object.keys(errors.value).length
})

const submit = handleSubmit(async () => {
  try {
    isLoading.value = true

    await handleFormSubmit({
      mail: mail.value,
    })
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
})

const socials = [
  {
    icon: 'icon-facebook',
    link: '',
  },
  {
    icon: 'icon-instagram',
    link: '',
  },
]
</script>

<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__logo">
        <h1>LOGO</h1>
      </div>

      <div class="footer__content">
        <div class="footer__section footer__section_left">
          <div class="footer__block">
            <h4 class="footer__block-title h4">Підпишись</h4>

            <div class="footer__block-form">
              <InputButton
                v-model:value="mail"
                :disabled="isLoading || isErrors"
                :loading="isLoading"
                placeholder="Пошта"
                @set-action="submit"
              />
            </div>
          </div>
        </div>

        <div class="footer__section footer__section_right">
          <div class="footer__block">
            <h4 class="footer__block-title h4">Меню</h4>

            <div class="footer__block-list">
              <div
                v-for="item in MENU_ITEMS"
                :key="item.key"
                class="footer__block-item"
              >
                <p
                  class="body-typography footer__block-item-link"
                  @click="scrollToSection(item.key)"
                >
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>

          <div class="footer__block">
            <h4 class="footer__block-title h4">Контакти</h4>

            <div class="footer__block-list">
              <div
                v-for="item in CONTACTS"
                :key="item.value"
                class="footer__block-item"
              >
                <a
                  v-bind="getLinkAttributes(item)"
                  class="body-typography footer__block-item-link"
                >
                  {{ item.value }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__bottom-text body-typography">
          © 2020 Резон Плюс-продаж освітлювальних приладів
        </div>

        <div class="footer__bottom-socials">
          <a
            v-for="item in socials"
            :key="item.icon"
            href=""
            class="footer__bottom-social"
          >
            <BaseIcon :icon="item.icon" class="footer__bottom-social-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'footer';
</style>
