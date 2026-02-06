<template>
  <button
    :class="[
      baseClasses,
      sizeClasses,
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
  size: { type: String, default: "md" },
})

const emit = defineEmits(['click'])

const baseClasses = `
  font-semibold
  rounded-lg
  text-lg
  focus:outline-none
`
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm'
    case 'lg':
      return 'px-5 py-3 text-lg'
    case 'md':
    default:
      return 'px-4 py-2 text-base'
  }
})


const animatedClasses = `
      hover:rotate-360
      transition-transform duration-500 ease-in-out
`
</script>