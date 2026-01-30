import { onMounted, onUnmounted, ref } from "vue"
import { useRouter } from "vue-router"

export function useScrollSpy(sectionIds) {
  const router = useRouter()
  let observer
  const isScrolling = ref(false)
  let scrollTimeout

  onMounted(() => {
    // Disable observer when route changes
    router.beforeEach(() => {
      isScrolling.value = true
      return true
    })

    // Re-enable observer when scroll actually stops
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling.value = false
      }, 50) // Only 150ms after last scroll event
    })

    observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.value) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            router.replace({ hash: `#${entry.target.id}` })
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    window.removeEventListener("scroll", () => {})
    clearTimeout(scrollTimeout)
  })
}