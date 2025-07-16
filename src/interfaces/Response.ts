interface Response {
  info: Info;
  config: Config;
}

export interface SingleResponse<T> extends Response {
  data: T;
}

export interface PaginatedResponse<T> extends Response {
  pagination: Pagination;
  data: T[];
}

interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
}

interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}


interface Config {
  iiif_url: string;
  website_url: string;
}
