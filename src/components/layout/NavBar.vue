<template>
  <nav class="fixed select-none flex justify-around items-center px-4 py-4 w-screen  h-15 md:h-16 lg:h-20 top-0 bg-bg-main/80 backdrop-blur-md z-40">
      <p class="font-bold text-3xl text-accent">Georgi</p>
      <ul class="uppercase hidden gap-4 font-medium xl:flex">
        <li class="hover:text-accent transition-colors duration-300"
        :class="{
        'text-accent': route.hash === section.path,
        'text-muted': route.hash !== section.path
      }" v-for="(section, i) in sections.filter(((section) => section.path))" :key="section.path">
          <RouterLink :to="`/${section.path}`">{{ section.name }}</RouterLink>
       </li>
      </ul>
        <ToggleDarkBtn @click="isDark = !isDark"  size="md">
        {{ isDark ? "🌙" : "☀️" }}
      </ToggleDarkBtn>
      <Hamburger class="xl:hidden" :isOpen="navOpen" @toggle="navOpen = !navOpen"/>
  </nav>
  <MobileMenu class="xl:hidden" :isOpen="navOpen" @close="navOpen = false"/>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "@/composables/useTheme"
import { useRoute } from "vue-router"
import ToggleDarkBtn from "../ui/ToggleDarkBtn.vue";
import {sections} from "@/data/sections.js"
import Hamburger from "../ui/Hamburger.vue";
import MobileMenu from "../ui/MobileMenu.vue";
const { isDark } = useTheme()
const route = useRoute()
const navOpen = ref(false)
</script>