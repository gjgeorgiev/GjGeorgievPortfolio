<template>
  <div
    class="fixed right-6 top-1/2 -translate-y-1/2
           flex flex-col gap-8 z-50"
  >
    <button
      v-for="page in pages"
      :key="page.path"
      @click="go(page.path)"
      class=" w-3 h-3 rounded-full transition-all"
      :class="
        route.path === page.path
          ? 'bg-gray-500'
          : 'bg-gray-500 hover:bg-green-300'
      "
    />
  </div>
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