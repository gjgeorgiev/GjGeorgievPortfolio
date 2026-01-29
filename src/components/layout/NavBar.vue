<template>
  
  <nav class="flex justify-between items-center px-6 py-4">
    <h1 class="font-bold">Georgi's Portfolio</h1>
      <BaseButton @click="isDark = !isDark" variant="primary" size="lg">
        {{ isDark ? "🌙" : "☀️" }}
      </BaseButton>
    <div>
      <ul class="uppercase padding-x-4 flex gap-4 text-text-muted font-medium">
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