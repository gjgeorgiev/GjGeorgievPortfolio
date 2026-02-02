<template>
  <nav
    class="fixed right-40 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-8 2xl:flex"
  >
    <button
      v-for="page in pages"
      :key="page.path"
      @click="go(page.path)"
      class="button-indicator w-3 h-3 rounded-full transition-all duration-300"
      :class="{
        'bg-green-400': route.hash === page.path,
        'bg-gray-600': route.hash !== page.path
      }"
    />
    </nav>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { sections } from "../../data/sections"

const router = useRouter()
const route = useRoute()
const pages = sections

const go = (path) => {
  router.push(path)
}
</script>