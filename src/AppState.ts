import { reactive } from "vue";
import type { Artwork, DetailedArtwork } from "./models/Artwork.ts";
import type { Artist } from "./models/Artist.ts";

class AppState {
  artworks: Artwork[] = []
  artwork: DetailedArtwork | null = null
  artist: Artist | null = null
  currentPage = 0
  totalPages = 0
}

export const appState = reactive(new AppState())
