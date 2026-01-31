<template>
  <SectionWrapper id="featured">
    <!-- Header -->
    <div class="max-w-3xl mb-20">
      <h1 class="md:text-2xl font-bold">
        Featured Project
      </h1>

      <h2 class="text-3xl md:text-4xl font-semibold mt-3 mb-4">
        {{ project.title }}
      </h2>

      <p class="text-text-muted text-lg">
        {{ project.subtitle }}
      </p>
    </div>

    <!-- Overview -->
    <div class="grid md:grid-cols-2 gap-16 mb-24">
      <div>
        <h3 class="font-semibold text-xl mb-4">Overview</h3>
        <p class="text-text-muted leading-relaxed">
          {{ project.overview }}
        </p>
      </div>

      <ArchitectureDiagram />
    </div>

    <!-- Problem / Solution -->
    <div class="grid md:grid-cols-2 gap-16 mb-24">
      <div>
        <h3 class="font-semibold text-xl mb-4">Problem</h3>
        <ul class="space-y-3 text-text-muted">
          <li
            v-for="item in project.problem"
            :key="item"
            class="flex gap-3"
          >
            <span class="text-accent">—</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-xl mb-4">Solution</h3>
        <ul class="space-y-3 text-text-muted">
          <li
            v-for="item in project.solution"
            :key="item"
            class="flex gap-3"
          >
            <span class="text-accent">—</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Results -->
    <div class="grid sm:grid-cols-3 gap-8 mb-24">
      <StatCard
        v-for="result in project.results"
        :key="result"
        :text="result"
      />
    </div>

    <!-- Tech stack -->
    <div>
      <h3 class="font-semibold text-xl mb-6">Tech Stack</h3>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="border border-border-subtle px-4 py-1.5 rounded-full text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "@/components/ui/SectionWrapper.vue"
import ArchitectureDiagram from "@/components/featured/ArchitectureDiagram.vue"
import StatCard from "@/components/featured/StatCard.vue"
import { featuredProject as project } from "@/data/featuredProject"
</script>
