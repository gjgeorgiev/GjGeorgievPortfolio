<template>
  <div class="fixed top-0 left-0 h-1 bg-accent z-50" :style="{ width: `${progress}%` }" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const progress = ref(0)

const update = () => {
  const h =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  progress.value = (window.scrollY / h) * 100
}

onMounted(() => window.addEventListener("scroll", update))
onUnmounted(() => window.removeEventListener("scroll", update))
</script>