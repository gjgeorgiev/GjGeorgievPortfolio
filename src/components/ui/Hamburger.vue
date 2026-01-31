<template>
  <button
    @click="$emit('toggle', $event)"
    class="button-hamburger relative h-9 w-9 rounded-full p-2 text-secondary 2xl:h-16 2xl:w-16 2xl:p-4 [&>*]:w-8 2xl:[&>*]:w-16"
    aria-controls="primary-navigation"
    ref="button"
  >
    <svg fill="none" class="hamburger" viewBox="-10 -10 120 120">
      <path
        class="line"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m 15 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
      />
    </svg>
  </button>
</template>

<script setup>
import { onMounted,ref, watch } from 'vue';
const emit = defineEmits(['toggle'])

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})
const button = ref(null);

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    button.value.classList.add('open');
  } else {
    button.value.classList.remove('open');
  }
});

const toggleHamburger = (event) => {
  event.currentTarget.classList.toggle('open');
};

onMounted(() => {
  if (props.isOpen) {
    button.value.classList.add('open');
  }
});

</script>
