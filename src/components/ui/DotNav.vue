<template>
  <div class="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
    <button
      v-for="section in sections"
      :key="section.id"
      @click="scrollTo(section.id)"
      class="w-3 h-3 rounded-full transition-all"
      :class="active === section.id ? 'bg-accent scale-125' : 'bg-border-subtle'"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { sections } from "@/data/sections"

const active = ref(null)

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    entries =>
      entries.forEach(e => e.isIntersecting && (active.value = e.target.id)),
    { threshold: 0.6 }
  )

  sections.forEach(({ id }) => {
    const el = document.getElementById(id)
    el && observer.observe(el)
  })
})
</script>