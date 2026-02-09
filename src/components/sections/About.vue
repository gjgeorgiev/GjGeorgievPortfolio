<template>
  <SectionWrapper id="about">
    <div class="grid md:grid-cols-2 gap-16 items-start">
      <!-- Story -->
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold mb-6">
          About Me
        </h2>

        <div class="space-y-4 leading-relaxed">
          <p>
            I’m a developer who enjoys building clean, scalable systems that
            balance good design with solid engineering.
          </p>

          <p>
            I’m particularly interested in serverless architectures and data-driven
            applications.
          </p>

          <p>
            When I’m not coding, I enjoy learning new tools, gaming,
            and going to the gym.
          </p>
        </div>
      </div>

      <!-- Skills -->
      <div>
        <h3 class="font-semibold mb-4">
          Tools & Technologies
        </h3>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            :data-type="skill"
            class="tech-badge"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "@/components/ui/SectionWrapper.vue"
const skills = [
  "Vue",
  "JavaScript",
  "TailwindCSS",
  "AWS",
  "Git",
  "Python",
]
</script>
