<template>
  <SectionWrapper id="hero">
    <header>
    <div class="hero_sec">
    <p class="text-2xl md:text-4xl font-bold mb-8">
      Software Developer | Automation Engineer
    </p>
    <p class="hero__text">
        I'm an Automation Engineer with a career as a Software
			  Developer. I combine domain knowledge with engineering experience to build automation
			  platforms and systems that power them.
    </p>
    <p class="mb-8 text-xl">
      Interested in automation or cloud architecture? Let's talk.
    </p>
    <p class="hero__links">
      <a class="link hover:text-accent" href="https://github.com/gjgeorgiev" target="_blank">
        github:
        <span class="link__text">@gjgeorgiev</span>
      </a>
      <br>
      <button class="link email-btn hover:text-accent"
      :class="{ 'pointer-events-none': isLocked }" @click="copyFromElement(emailSpan)">email:
        <span ref="emailSpan" class="link__text">gjgeorgiev15 [at] gmail (dot) com</span>
      </button>
    </p>
    </div>
    <Transition name="toast-transition">
    <SimpleToast v-if="showToast">Copied to clipboard!</SimpleToast>
    </Transition>
    </header>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "@/components/ui/SectionWrapper.vue"
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