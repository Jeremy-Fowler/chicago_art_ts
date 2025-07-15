<script setup lang="ts">
import { appState } from '@/AppState.ts';
import ArtCard from '@/components/ArtCard.vue';
import PageNavigation from '@/components/PageNavigation.vue';
import { artistsService } from '@/services/ArtistsService.ts';
import { artworksService } from '@/services/ArtworksService.ts';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const artist = computed(() => appState.artist)
const artworks = computed(() => appState.artworks)

onMounted(() => {
  const artistId = route.params.id.toString()
  getArtistById(artistId)
  getArtworksByArtistId(artistId)
})

async function getArtistById(id: string) {
  try {
    await artistsService.getArtistById(id)
  } catch (error) {
    console.error('COULD NOT GET ARTIST', error);
  }
}

async function getArtworksByArtistId(id: string) {
  try {
    await artworksService.getArtworks({ 'query[term][artist_id]': id })
  } catch (error) {
    console.error(error);
  }
}
</script>


<template>
  <section>
    <div v-if="artist">
      <h1>{{ artist.title }}, ({{ artist.birthDate }} - {{ artist.deathDate }})</h1>
      <PageNavigation />
      <div class="masonry">
        <div v-for="artwork in artworks" :key="artwork.id">
          <RouterLink :to="{ name: 'artwork details', params: { id: artwork.id } }">
            <ArtCard :artwork />
          </RouterLink>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </section>
</template>


<style scoped></style>
