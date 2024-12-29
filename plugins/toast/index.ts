import { ref } from 'vue'
import * as vt from 'vue-toastification'

import 'vue-toastification/dist/index.css'

// export type ToastPlugin = ReturnType<typeof useToast>

const timeout = ref(0)

// export function useToastPlugin(): ToastPlugin {
//   return useToast()
// }

export default defineNuxtPlugin((nuxtApp) => {
  const pluginOptions = {
    shareAppContext: true,
    filterBeforeCreate: (toast: any, toasts: any) => {
      if (typeof toast.timeout !== 'number') {
        return toast
      }

      if (toasts.filter((t: any) => t.content === toast.content).length !== 0) {
        return false
      }

      timeout.value += 20

      toast.onClose = () => {
        timeout.value = 0
      }
      toast.timeout = toast.timeout + timeout.value
      return toast
    },
  }

  nuxtApp.vueApp.use(vt.default, pluginOptions)

  return {
    provide: {
      toast: vt.useToast(),
    },
  }
})
