<script setup lang="ts">
import { appState } from '@/AppState.ts';
import ArtCard from '@/components/ArtCard.vue';
import PageNavigation from '@/components/PageNavigation.vue';
import SearchForm from '@/components/SearchForm.vue';
import { artworksService } from '@/services/ArtworksService.ts';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const artworks = computed(() => appState.artworks)
const route = useRoute()

onMounted(getArtworks)


async function getArtworks() {
  try {
    await artworksService.getArtworks(route.query)
  } catch (error) {
    console.error('COULD NOT GET ARTWORKS', error);
  }
}
</script>

<template>
  <section>
    <SearchForm />
    <PageNavigation />
    <div class="masonry">
      <div v-for="artwork in artworks" :key="artwork.id" :style="{ height: artwork.height }">
        <RouterLink :to="{ name: 'artwork details', params: { id: artwork.id } }">
          <ArtCard :artwork />
        </RouterLink>
      </div>
    </div>
  </section>
</template>


<style scoped></style>
