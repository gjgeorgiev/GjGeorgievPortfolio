<script setup>
import Navbar from "@/components/layout/Navbar.vue"
import Footer from "@/components/layout/Footer.vue"
import DotNav from "@/components/ui/DotNav.vue"
import ScrollProgress from "@/components/ui/ScrollProgress.vue"
import PageIndicator from "@/components/ui/PageIndicator.vue"
import "./assets/main.css";
</script>

<template>
  <Navbar />
  <ScrollProgress class="md:hidden" />
  <PageIndicator />
  <DotNav />

  <main>
  <RouterView v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  </main>

  <Footer />
</template>

<style scoped>

</style>
