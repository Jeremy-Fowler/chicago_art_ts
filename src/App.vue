<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
      Chicago Art Institute
    </RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    All data retrieved from the
    <a href="https://www.artic.edu/open-access/public-api" target="_blank">
      Art Institute of Chicago API
    </a>
  </footer>

</template>

<style scoped>
footer {
  text-align: center;
}
</style>
