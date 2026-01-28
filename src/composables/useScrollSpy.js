import { onMounted, onUnmounted } from "vue"
import { useRouter } from "vue-router"

export function useScrollSpy(sectionIds) {
  const router = useRouter()
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
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

  onUnmounted(() => observer?.disconnect())
}