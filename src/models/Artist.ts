import type { ArtistResponse } from "@/types/ArtistResponse.ts";

export class Artist {
  id: number;
  description: string | null;
  birthDate: number;
  deathDate: number;
  title: string;
  constructor(data: ArtistResponse) {
    this.id = data.id
    this.description = data.description
    this.birthDate = data.birth_date
    this.deathDate = data.death_date
    this.title = data.title
  }
}
