import { ref, watchEffect } from "vue"

const isDark = ref(
  localStorage.theme === "dark" ||
    (!localStorage.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
)

watchEffect(() => {
  document.documentElement.classList.toggle("dark", isDark.value)
  localStorage.theme = isDark.value ? "dark" : "light"
})

export function useTheme() {
  return { isDark }
}