import axios from 'axios'

export interface Data {
  name?: string
  mail: string
  message?: string
}

export function useEmailTelegram() {
  const { $emailjs } = useNuxtApp()
  console.log($emailjs, ' $emailjs')
  const config = useRuntimeConfig()
  const isLoading = ref(false)
  const route = useRoute()

  const { $toast } = useNuxtApp()
  function validatePhone(phone: string) {
    if (phone.includes('+3800')) {
      return false
    }
    const regex = /^\+380\d{9}$/
    return regex.test(phone)
  }

  async function handleFormSubmit(data: Data) {
    try {
      await sendEmail({
        mail: data.mail,
        message: data.message || '...',
      })
      // await sendToTelegram(data)
    } catch (err: any) {
      $toast.error(err.message)
      throw Error(err)
    }
  }

  async function sendToTelegram(data: Data) {
    if (!data) {
      throw Error('No data provided')
    }

    try {
      const text = `
        <b>Пошта клієнта:</b> <i>${data.mail}</i>
      `

      await $fetch(
        `https://api.telegram.org/bot${config.public.tgBotToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: config.public.tgChatId,
            text,
            parse_mode: 'HTML',
          }),
        }
      )
    } catch (err) {
      console.error(err)
    }
  }

  async function sendEmail(options: Data) {
    try {
      isLoading.value = true

      await $emailjs.send(
        config.public.serviceId,
        config.public.templateId,
        {
          to_email: options.mail,
          // message: options.message,
        },
        config.public.emailjsPublicKey
      )

      $toast.success('Дякуємо, що скористалися нашими послугами!')
    } catch (err: any) {
      console.error(err)
      $toast.error(err?.text || err.message)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    handleFormSubmit,
  }
}
