import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home.vue"
import Projects from "@/components/sections/Projects.vue"
import About from "@/components/sections/About.vue"
import Featured from "@/components/sections/FeaturedProject.vue"
import Hero from "@/components/sections/Hero.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/#hero", component: Hero },
    { path: "/#featured", component: Featured },
    { path: "/#projects", component: Projects },
    { path: "/#about", component: About },
  ],
 scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: "smooth",
    }
  }
  
  if (savedPosition) return savedPosition
  
  return { top: 0 }
},
})