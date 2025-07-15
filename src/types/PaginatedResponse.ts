export interface PaginatedResponse {
  preference: null;
  pagination: Pagination;
  data: Datum[];
  info: Info;
  config: Config;
}

interface Config {
  iiif_url: string;
  website_url: string;
}

interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

interface Datum {
  _score: number;
  id: number;
  title: string;
  thumbnail: Thumbnail;
  image_id: string;
}

interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
}
