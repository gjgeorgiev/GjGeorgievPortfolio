<template>
  <SectionWrapper id="projects">
    <h2 class="text-2xl md:text-3xl font-semibold mb-12">
      Projects
    </h2>

    <div class="grid__projects">
      <ProjectRow
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :reverse="index % 2 !== 0"
      />
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "@/components/ui/SectionWrapper.vue"
import ProjectRow from "./ProjectRow.vue"
import { projects } from "@/data/projects"
</script>