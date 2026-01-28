<template>
  <section
    v-motion="reveal"
    class="max-w-6xl mx-auto px-6 py-16 md:py-24"
  >
    <slot />
  </section>
</template>

<script setup>
import { reveal } from "@/composables/useReveal.js"
</script>