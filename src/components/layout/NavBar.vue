<template>
  
  <nav class="flex justify-between items-center px-4 py-4 w-screen fixed top-0 bg-bg-main/80 backdrop-blur-md z-50">
    <div class="select-none font-bold text-3xl bg-linear-60 from-purple-400 to-pink-500 bg-clip-text text-transparent">Georgi's Portfolio</div>
      <BaseButton @click="isDark = !isDark" variant="primary" size="lg">
        {{ isDark ? "🌙" : "☀️" }}
      </BaseButton>
    <div>
      <ul class="uppercase flex gap-2 text-text-accent font-medium">
      <RouterLink to="/#hero">Home</RouterLink>
      <span class="">|</span>
      <RouterLink to="/#projects">Projects</RouterLink>
      <span class="">|</span>
      <RouterLink to="/#about">About</RouterLink>
      </ul>
    </div>
  </nav>
  
</template>

<script setup>
import { useTheme } from "@/composables/useTheme"
import BaseButton from "../ui/BaseButton.vue";
const { isDark } = useTheme()
</script>