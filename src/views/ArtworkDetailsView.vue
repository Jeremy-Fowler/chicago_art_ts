<script setup lang="ts">
import { appState } from '@/AppState.ts';
import ArtCard from '@/components/ArtCard.vue';
import { artworksService } from '@/services/ArtworksService.ts';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const artwork = computed(() => appState.artwork)
const route = useRoute()

onMounted(() => {
  const artworkId: string = route.params.id.toString()
  getArtworkById(artworkId)
})

async function getArtworkById(id: string) {
  try {
    await artworksService.getArtworkById(id)
  } catch (error) {
    console.error('COULD NOT GET ARTWORK', error);
  }
}
</script>


<template>
  <section>
    <div v-if="artwork">
      <ArtCard :artwork />
      <div class="border">
        <RouterLink :to="{ name: 'artist details', params: { id: artwork.artistId } }">
          <h2>{{ artwork.artist }}</h2>
        </RouterLink>
        <h2><i>{{ artwork.title }}</i>, {{ artwork.year }}</h2>
        <div v-html="artwork.description"></div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </section>
</template>


<style>
.border {
  border: thin solid black;
  padding: 0 1em;
}
</style>
