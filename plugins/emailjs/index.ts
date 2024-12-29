import emailjs from '@emailjs/browser'

export default defineNuxtPlugin((nuxtApp) => {
    emailjs.init(nuxtApp.$config.public.emailJsInitKey)

    return {
        provide: {
            emailjs: emailjs
        }
    }
})
