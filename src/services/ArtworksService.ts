import { appState } from "@/AppState.ts";
import { Artwork, DetailedArtwork } from "@/models/Artwork.ts";
import type { ArtworkData } from "@/types/ArtworkResponse.ts";
import { ArtService } from "./ArtService.ts";
import type { AxiosResponse } from "axios";
import type { PaginatedResponse } from "@/types/PaginatedResponse.ts";

class ArtworksService extends ArtService {

  async getArtworks(query: object = {}) {
    appState.artworks.length = 0
    const params = {
      fields: 'image_id,id,title,thumbnail',
      limit: 50,
      ...query
    }
    const res: AxiosResponse<PaginatedResponse> = await this.artApi.get('artworks/search', { params })
    appState.artworks = res.data.data.map((a: ArtworkData) => new Artwork(a))
    appState.currentPage = res.data.pagination.current_page
    appState.totalPages = (res.data.pagination.total > 1000 ? Math.ceil(1000 / res.data.pagination.limit) : res.data.pagination.total_pages)
  }

  async getArtworkById(id: string) {
    appState.artwork = null
    const res = await this.artApi.get('artworks/' + id)
    appState.artwork = new DetailedArtwork(res.data.data)
  }

}

export const artworksService = new ArtworksService()
