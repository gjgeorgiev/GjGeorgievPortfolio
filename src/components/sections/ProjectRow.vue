<template>
  <div
    class="flex flex-col md:grid md:grid-cols-2 gap-12 items-center"
    :class="{ 'md:flex-row-reverse': reverse }"
  >
    <!-- Text -->
    <div>
      <h3 class="text-xl md:text-2xl font-semibold mb-3">
        {{ project.title }}
      </h3>

      <p class="text-text-muted mb-6">
        {{ project.description }}
      </p>

      <!-- Tech tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="text-sm border border-subtle px-3 py-1 rounded-full"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex gap-4 text-sm">
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          class="text-muted hover:text-accent transition"
        >
          Live →
        </a>
        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          class="text-muted hover:text-accent transition"
        >
          GitHub →
        </a>
      </div>
    </div>

    <!-- Visual / Placeholder -->
    <div
      class="w-full h-48 md:h-64 bg-bg-surface
             border border-subtle rounded-xl"
    />
  </div>
</template>

<script setup>
defineProps({
  project: Object,
  reverse: Boolean,
})
</script>
