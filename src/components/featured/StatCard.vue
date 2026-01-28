<template>
  <div
    class="border border-border-subtle rounded-xl
           p-6 bg-bg-surface"
  >
    <p class="text-lg font-medium text-center">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  text: String,
})
</script>
