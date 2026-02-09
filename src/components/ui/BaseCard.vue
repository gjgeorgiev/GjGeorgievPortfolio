<template>
  <article
    :class="[
      'card',
      hoverLiftClasses,
      animationClasses
    ]"
  >
    <slot />
</article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  hoverLift: { type: Boolean, default: true },
})

const hoverLiftClasses = computed(() =>
  props.hoverLift
    ? "hover:-translate-y-1 hover:shadow-lg"
    : ""
)

const animationClasses = `
  transition-transform duration-300
`
</script>