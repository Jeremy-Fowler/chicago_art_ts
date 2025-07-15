import { appState } from "@/AppState.ts";
import { ArtService } from "./ArtService.ts";
import { Artist } from "@/models/Artist.ts";
import type { AxiosResponse } from "axios";
import type { SingleResponse } from "@/interfaces/Response.ts";
import type { ArtistData } from "@/interfaces/Artist.ts";

class ArtistsService extends ArtService {
  async getArtistById(id: string) {
    appState.artist = null
    const res: AxiosResponse<SingleResponse<ArtistData>> = await this.artApi.get('artists/' + id)
    appState.artist = new Artist(res.data.data)
  }
}
export const artistsService = new ArtistsService()
