import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home.vue"
import Projects from "@/views/Projects.vue"
import About from "@/views/About.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/projects", component: Projects },
    { path: "/about", component: About },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return {
      top: 0,
      behavior: "smooth",
    }
  },
})