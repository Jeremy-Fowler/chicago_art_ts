import type { ArtistData } from "@/interfaces/Artist";

export class Artist {
  id: number;
  description: string | null;
  birthDate: number;
  deathDate: number;
  title: string;
  constructor(data: ArtistData) {
    this.id = data.id
    this.description = data.description
    this.birthDate = data.birth_date
    this.deathDate = data.death_date
    this.title = data.title
  }
}
