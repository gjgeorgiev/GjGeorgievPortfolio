<template>
  <button
    :class="[
      baseClasses,
      variantClasses,
      sizeClasses,
      focusClasses,
      animatedClasses
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: "primary" },
  size: { type: String, default: "md" },
})

const emit = defineEmits(['click'])

const baseClasses = `
  font-semibold
  rounded-lg
  focus:outline-none
  inline-flex items-center justify-center
`

const variantClasses = computed(() => {
  if (props.variant === "primary") {
    return `
      bg-accent text-bg-main
      hover:bg-accent-hover hover:text-bg-main 
    `
  }
  if (props.variant === "secondary") {
    return `
      border border-text-muted
      text-text-primary
      hover:border-accent hover:text-accent
    `
  }
  return ""
})

const sizeClasses = computed(() => {
  if (props.size === "sm") return "px-4 py-2 text-sm"
  if (props.size === "lg") return "px-8 py-3 text-lg"
  return "px-6 py-2.5 text-base"
})

const focusClasses = `

`

const animatedClasses = `
      hover:rotate-360
      transition-transform duration-500 ease-in-out
`
</script>