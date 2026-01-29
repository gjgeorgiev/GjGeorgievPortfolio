<template>
  
  <nav class="flex justify-between items-center px-4 py-4">
    <h2 class="font-bold text">Georgi's Portfolio</h2>
      <BaseButton @click="isDark = !isDark" variant="primary">
        {{ isDark ? "🌙" : "☀️" }} Hellos
      </BaseButton>
    <div>
      <ul class="uppercase">
      <RouterLink to="/">Home</RouterLink>
      <span class="opacity-50">|</span>
      <RouterLink to="/projects">Projects</RouterLink>
      <span class="opacity-50">|</span>
      <RouterLink to="/about">About</RouterLink>
      </ul>
    </div>
  </nav>
  
</template>

<script setup>
import { useTheme } from "@/composables/useTheme"
import BaseButton from "../ui/BaseButton.vue";
const { isDark } = useTheme()
</script>