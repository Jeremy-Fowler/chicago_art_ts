<script setup lang="ts">
import { Artwork } from '@/models/Artwork.ts';
import { ref } from 'vue';

defineProps({
  artwork: { type: Artwork, required: true }
})

const imgLoaded = ref(false)
</script>


<template>
  <img v-if="!imgLoaded" :src="artwork.previewImg" :alt="artwork.altText" :height="artwork.height"
    :width="artwork.width" class="blur" :title="artwork.title">
  <img v-show="imgLoaded" :src="artwork.imgUrl" :alt="artwork.altText" :height="artwork.height" :width="artwork.width"
    @load="imgLoaded = true" :title="artwork.title">
</template>


<style scoped>
img {
  height: auto;
  width: 100%;
}

.blur {
  filter: blur(5px);
}
</style>
