<template>
  <div
    :class="[
      'bg-bg-surface text-text-primary border border-border-subtle',
      'rounded-xl p-6',
      'shadow-soft',
      hoverLiftClasses,
      animationClasses
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
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