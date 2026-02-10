<script setup>
import Navbar from "@/components/layout/Navbar.vue"
import Footer from "@/components/layout/Footer.vue"
import PageIndicator from "@/components/ui/PageIndicator.vue"
import "./assets/main.css";
</script>

<template>
  <Navbar />

    <PageIndicator />
    <main class= "pt-15 min-h-[calc(100vh-3.75rem)]">
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
