<template>
  <transition name="slide">
    <div
      v-if="isOpen"
      class="fixed inset-0 w-screen bg-black/40 h-screen z-40 flex flex-col"
    >
      <!-- Menu Content -->
      <div class="flex-1 flex flex-col justify-between">
        <!-- Navigation Links -->
        <div class="p-6">
          <ul class="space-y-4">
            <li
              v-for="(section, i) in sections.filter((section) => section.path)"
              :key="section.path"
              class="text-lg font-medium"
            >
              <RouterLink
                :to="`/${section.path}`"
                @click="closeMenu"
                :class="{
                  'text-accent': route.hash === section.path,
                  'text-text-secondary hover:text-accent transition-colors': route.hash !== section.path
                }"
              >
                {{ i }}. {{ section.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Footer -->
        <Footer />
      </div>

      <!-- Close Button -->
      <button
        @click="closeMenu"
        class="absolute top-4 right-4 text-2xl text-secondary hover:text-accent transition-colors"
        aria-label="Close menu"
      >
        ✕
      </button>
    </div>
  </transition>
</template>

<script setup>
import { useRoute } from "vue-router"
import { sections } from "@/data/sections.js"
import Footer from "../layout/Footer.vue"

const route = useRoute()

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeMenu = () => {
  emit('close')
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
