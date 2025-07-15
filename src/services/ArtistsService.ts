import { appState } from "@/AppState.ts";
import { ArtService } from "./ArtService.ts";
import { Artist } from "@/models/Artist.ts";

class ArtistsService extends ArtService {
  async getArtistById(id: string) {
    appState.artist = null
    const res = await this.artApi.get('artists/' + id)
    appState.artist = new Artist(res.data.data)
  }
}
export const artistsService = new ArtistsService()
