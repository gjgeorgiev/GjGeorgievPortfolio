<template>
  
  <nav class="flex justify-between items-center px-4 py-4 w-screen fixed top-0 bg-bg-main/80 backdrop-blur-md z-50">
    <div class="select-none font-bold text-3xl bg-linear-60 from-purple-400 to-pink-500 bg-clip-text text-transparent">Georgi's Portfolio</div>
      <BaseButton @click="isDark = !isDark" variant="primary" size="lg">
        {{ isDark ? "🌙" : "☀️" }}
      </BaseButton>
      <Hamburger class="" @toggle="$emit('toggleMenu')"> Truru</Hamburger>
    <div>
      <ul class="uppercase flex justify-end gap-4 font-medium">
        <li class="hover:text-accent transition-colors duration-300"
        :class="{
        'text-accent': route.hash === section.path,
        'text-muted': route.hash !== section.path
      }" v-for="(section, i) in sections.filter(((section) => section.path))" :key="section.path">
          <span class="">{{ i }}.</span>
          <RouterLink :to="`/${section.path}`">{{ section.name }}</RouterLink>
       </li>
      </ul>
    </div>
  </nav>
  
</template>

<script setup>
import { useTheme } from "@/composables/useTheme"
import { useRoute} from "vue-router"
import BaseButton from "../ui/BaseButton.vue";
import {sections} from "@/data/sections.js"
import Hamburger from "../ui/Hamburger.vue";
const { isDark } = useTheme()
const route = useRoute()
</script>