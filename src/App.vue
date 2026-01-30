<script setup>
import Navbar from "@/components/layout/Navbar.vue"
import Footer from "@/components/layout/Footer.vue"
import PageIndicator from "@/components/ui/PageIndicator.vue"
import "./assets/main.css";
</script>

<template>
  <Navbar />

  <main>
    <PageIndicator />
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
