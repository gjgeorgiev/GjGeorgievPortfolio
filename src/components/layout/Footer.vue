<template>
  
  <footer class="max-w-3/4 border-t mx-auto">
    <div class="max-w-6xl mx-auto px-6 py-10">
      <div
        class="footer__items md:flex-row md:items-center"
      >
        <!-- Identity -->
          <p class="link__text">
            M.Sc. Automation Engineering, 2+ years of Software Development experience
          </p>
        <!-- Socials -->
         <span class="link__text">·</span>
          <a
            href="https://github.com/gjgeorgiev"
            target="_blank"
            rel="external noreferrer"
            class="link hover:text-accent"
          >
            GitHub: 
            <span class="link__text">@gjgeorgiev</span>
          </a> 
          <span class="link__text">·</span>
          <button class="link email-btn hover:text-accent"
            :class="{ 'pointer-events-none': isLocked }" @click="copyFromElement(emailSpan)">email:
            <span ref="emailSpan" class="link__text">gjgeorgiev15 [at] gmail (dot) com</span>
          </button>
          <span class="link__text">·</span>
          <a class="link text-accent" href="#hero">Back to top</a>
      </div>

    </div>
    <Transition name="toast-transition">
    <SimpleToast v-if="showToast">Copied to clipboard!</SimpleToast>
    </Transition>
  </footer>
</template>

<script setup>
import SimpleToast from "../ui/SimpleToast.vue";
import { useClipboardToast } from '@/composables/showToast'
import { ref } from "vue";

const emailSpan = ref(null)

const { showToast, isLocked, copyFromElement } =
  useClipboardToast(1500)
</script>

<style scoped>
    .toast-transition-enter-active,
    .toast-transition-leave-active {
      transition:
        opacity 0.25s ease-out,
        transform 0.25s ease-out;
    }

    .toast-transition-enter-from {
      opacity: 0;
      transform: translate(-50%, calc(-50% + 16px));
    }

    .toast-transition-enter-to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }

    .toast-transition-leave-from {
      opacity: 1;
      transform: translate(-50%, -50%);
    }

    .toast-transition-leave-to {
      opacity: 0;
      transform: translate(-50%, calc(-50% + 16px));
    }
</style>