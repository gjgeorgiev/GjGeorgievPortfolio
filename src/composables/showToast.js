import { ref } from 'vue'

export function useClipboardToast(duration) {
  const showToast = ref(false)
  const isLocked = ref(false)

  const parseEmail = (text) =>
    text
      .replace('[at]', '@')
      .replace('(dot)', '.')
      .replace(/\s/g, '')

  const copyFromElement = async (el) => {
    if (!el || isLocked.value) return

    isLocked.value = true

    const email = parseEmail(el.textContent)

    try {
      await navigator.clipboard.writeText(email)
      showToast.value = true
    } catch (err) {
      console.error('Clipboard failed', err)
    }

    setTimeout(() => {
      showToast.value = false
      isLocked.value = false
    }, duration)
  }

  return {
    showToast,
    isLocked,
    copyFromElement,
  }
}