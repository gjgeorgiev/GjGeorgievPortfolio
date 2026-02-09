<template>
    <!-- Card -->
    <BaseCard>
      <div class="title__bar">
        <h3 class="title">
          {{ project.title }}
        </h3>
        <span class="badge"
        :data-type="project.type"> {{ project.type }}</span>
      </div>

      <div class="media__bar"></div>

      <div class="content__bar">
      <p class="text-text-muted mb-6">
        {{ project.description }}
      </p>
      <div class="tech__badges">
        <span
          v-for="tech in project.tech"
          :key="tech"
          :data-type="tech"
          class="tech-badge"
        >
          {{ tech }}
        </span>
        </div>
      </div>

      <div class="links__bar">
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          class="btn__primary btn__live hover:text-accent transition"
        >
          Live
        </a>
        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          class="btn__primary btn__github hover:text-accent transition"
        >
          View on Github
        </a>
        <a
          v-if="project.closed"
          class="closed__proj"
        >
          Closed-source project — details available on request.
        </a>
      </div>
    </BaseCard>
</template>

<script setup>
import BaseCard from '../ui/BaseCard.vue';

defineProps({
  project: Object,
  reverse: Boolean,
})
</script>
