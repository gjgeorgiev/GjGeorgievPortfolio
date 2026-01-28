<template>
  <footer class="border-t border-border-subtle mt-32">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Top row -->
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
      >
        <!-- Identity -->
        <div>
          <p class="font-semibold text-lg">X</p>
          <p class="text-text-muted text-sm mt-1">
            Building thoughtful web experiences.
          </p>
        </div>

        <!-- Navigation -->
        <nav class="flex gap-6 text-sm">
          <RouterLink to="/" class="hover:text-accent transition">
            Home
          </RouterLink>
          <RouterLink to="/projects" class="hover:text-accent transition">
            Projects
          </RouterLink>
          <RouterLink to="/about" class="hover:text-accent transition">
            About
          </RouterLink>
        </nav>

        <!-- Socials -->
        <div class="flex gap-4 text-sm">
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noopener"
            class="text-text-muted hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener"
            class="text-text-muted hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:you@email.com"
            class="text-text-muted hover:text-accent transition"
          >
            Email
          </a>
        </div>
      </div>

      <!-- Bottom row -->
      <div
        class="mt-10 pt-6 border-t border-border-subtle
               flex flex-col md:flex-row justify-between text-sm text-text-muted"
      >
      
        <span>© {{ year }} X. All rights reserved.</span>
        <span class="mt-2 md:mt-0">
          Built with Vue, Tailwind, and curiosity ☕
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>