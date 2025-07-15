import type { ArtworkData, DetailedArtworkData } from "@/types/ArtworkResponse.ts";

export class Artwork {
  id: number;
  title: string;
  altText: string;
  imageId: string;
  height: number;
  width: number;
  previewImg: string;
  constructor(data: ArtworkData) {
    this.id = data.id
    this.title = data.title
    this.height = data.thumbnail?.height ?? 500
    this.width = data.thumbnail?.width ?? 700
    this.previewImg = data.thumbnail?.lqip ?? 'https://images.unsplash.com/photo-1590518273152-fb68d583d05e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVtcHR5JTIwZnJhbWV8ZW58MHx8MHx8fDA%3D'
    this.altText = data.thumbnail?.alt_text ?? 'a lady standing behind an empty frame'
    this.imageId = data.image_id
  }

  get imgUrl(): string {
    if (this.altText == 'a lady standing behind an empty frame') {
      return this.previewImg
    }
    return `https://www.artic.edu/iiif/2/${this.imageId}/full/843,/0/default.jpg`
  }
}


export class DetailedArtwork extends Artwork {
  description: string;
  artist: string;
  year: string;
  artistId: number;
  constructor(data: DetailedArtworkData) {
    super(data)
    this.description = data.description
    this.artist = data.artist_display
    this.year = data.date_display
    this.artistId = data.artist_id
  }
}
