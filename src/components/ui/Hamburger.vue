<template>
  <button
    @click="() => $emit('toggle')"
    class="button-hamburger relative h-9 w-9 rounded-full p-2 text-secondary 2xl:h-16 2xl:w-16 2xl:p-4 [&>*]:w-8 2xl:[&>*]:w-16"
    aria-controls="primary-navigation"
    ref="button"
  >
    <svg stroke="currentColor" fill="none" class="hamburger" viewBox="-10 -10 120 120">
      <path
        class="line"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
      />
    </svg>
  </button>
</template>

<script setup>

const emit = defineEmits(['toggle'])

</script>
