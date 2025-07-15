<script setup lang="ts">
import { appState } from '@/AppState.ts';
import { artworksService } from '@/services/ArtworksService.ts';
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const currentPage = computed(() => appState.currentPage)
const totalPages = computed(() => appState.totalPages)
const router = useRouter()
const route = useRoute()

watch(() => route.query, changePage)

async function changePage() {
  try {
    await artworksService.getArtworks({ ...route.query, 'query[term][artist_id]': route.params.id })
  } catch (error) {
    console.error(error);
  }
}

function updateQuery(pageNumber: number) {
  router.push({ query: { ...route.query, page: pageNumber } })
}

</script>


<template>
  <div>
    <button @click="updateQuery(1)" type="button" title="beginning" :disabled="currentPage < 2">
      <span class="mdi mdi-page-first"></span>
    </button>
    <button @click="updateQuery(currentPage - 1)" type="button" title="previous" :disabled="currentPage < 2">
      <span class="mdi mdi-chevron-left"></span>
    </button>
    <span>{{ currentPage }} of {{ totalPages }}</span>
    <button @click="updateQuery(currentPage + 1)" type="button" title="next"
      :disabled="currentPage == totalPages || currentPage == 100">
      <span class="mdi mdi-chevron-right"></span>
    </button>
    <button @click="updateQuery(totalPages)" type="button" title="end" :disabled="currentPage == totalPages">
      <span class="mdi mdi-page-last"></span>
    </button>
  </div>
</template>


<style scoped>
div {
  display: flex;
  gap: .35em;
  align-items: center;
  margin: 1em 0;
}
</style>
