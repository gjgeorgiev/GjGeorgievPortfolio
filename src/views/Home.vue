<template>
  <main>
    <Hero id="hero"/>
    <Projects id="projects"/>
    <About id="about"/>
  </main>
</template>

<script setup>
import Hero from "@/components/sections/Hero.vue"
//<FeaturedProject id="featured" /> import FeaturedProject from "@/components/sections/FeaturedProject.vue"
import Projects from "@/components/sections/Projects.vue"
import About from "@/components/sections/About.vue"
import { useScrollSpy } from "../composables/useScrollSpy";
useScrollSpy(['hero', 'featured', 'projects', 'about'])
</script>