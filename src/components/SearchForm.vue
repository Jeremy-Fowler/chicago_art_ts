<script setup lang="ts">
import { artworksService } from '@/services/ArtworksService.ts';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const search = ref('')

const router = useRouter()
const route = useRoute()

watch(() => route.query.q, searchArtworks)

async function searchArtworks() {
  try {
    await artworksService.getArtworks(route.query)
  } catch (error) {
    console.error(error);
  }
}
</script>


<template>
  <form @submit.prevent="router.push({ query: { q: search } })">
    <label for="search">Search</label>
    <input v-model="search" type="text" name="search" id="search">
    <button type="submit">
      <span class="mdi mdi-magnify"></span>
    </button>
  </form>
</template>


<style scoped>
label {
  margin-right: .35em;
}
</style>
