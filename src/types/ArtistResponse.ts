export interface ArtistResponse {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  sort_title: string;
  alt_titles: null;
  is_artist: boolean;
  birth_date: number;
  death_date: number;
  description: string | null;
  ulan_id: null;
  suggest_autocomplete_boosted: Suggestautocompleteboosted;
  suggest_autocomplete_all: Suggestautocompleteall;
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

interface Suggestautocompleteall {
  input: string[];
  weight: number;
  contexts: Contexts;
}

interface Contexts {
  groupings: string[];
}

interface Suggestautocompleteboosted {
  input: string[];
  weight: number;
}
