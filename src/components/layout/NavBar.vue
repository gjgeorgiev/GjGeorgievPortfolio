<template>
  <nav class="select-none flex justify-around items-center px-4 py-4 w-screen fixed top-0 bg-bg-main/80 backdrop-blur-md z-40">
    <div class="select-none font-bold text-3xl bg-linear-60 from-purple-400 to-pink-500 bg-clip-text text-transparent">Placeholder</div>
      <BaseButton @click="isDark = !isDark"  variant="primary" size="lg">
        {{ isDark ? "🌙" : "☀️" }}
      </BaseButton>
      <ul class="uppercase hidden gap-4 font-medium xl:flex">
        <li class="hover:text-accent transition-colors duration-300"
        :class="{
        'text-accent': route.hash === section.path,
        'text-muted': route.hash !== section.path
      }" v-for="(section, i) in sections.filter(((section) => section.path))" :key="section.path">
          <RouterLink :to="`/${section.path}`">{{ section.name }}</RouterLink>
       </li>
      </ul>
      <Hamburger class="xl:hidden" :isOpen="navOpen" @toggle="navOpen = !navOpen"/>
  </nav>
  <MobileMenu class="xl:hidden" :isOpen="navOpen" @close="navOpen = false"/>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "@/composables/useTheme"
import { useRoute} from "vue-router"
import BaseButton from "../ui/BaseButton.vue";
import {sections} from "@/data/sections.js"
import Hamburger from "../ui/Hamburger.vue";
import MobileMenu from "../ui/MobileMenu.vue";
const { isDark } = useTheme()
const route = useRoute()
const navOpen = ref(false)
</script>