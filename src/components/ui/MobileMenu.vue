<template>
  <transition name="slide">
    <aside
      v-if="isOpen"
      class="fixed w-screen bg-surface h-screen z-30 flex flex-col"
    >
      <!-- Menu Content -->
      <div class="flex flex-col justify-between">
        <!-- Navigation Links -->
        <div class="p-6 mt-14">
          <ul class="space-y-4">
            <li
              v-for="(section, i) in sections.filter((section) => section.path)"
              :key="section.path"
              class="text-2xl font-medium"
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
        <div class="mt-auto fixed bottom-0 w-full">
        <Footer />
        </div>
      </div>

    </aside>
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
  transition: opacity 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
