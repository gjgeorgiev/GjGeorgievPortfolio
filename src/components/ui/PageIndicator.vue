<template>
  <div
    class="fixed right-6 top-1/2 -translate-y-1/2
           flex flex-col gap-3 z-50"
  >
    <button
      v-for="page in pages"
      :key="page.path"
      @click="go(page.path)"
      class="w-12 h-3 rounded-full transition-all"
      :class="
        route.path === page.path
          ? 'bg-accent scale-125'
          : 'bg-border-subtle hover:bg-accent/50'
      "
      aria-label="Navigate page"
    />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route = useRoute()

const pages = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Featured" },
  {path: "/about", name: "About" },
]

const go = (path) => {
  router.push(path)
}
</script>