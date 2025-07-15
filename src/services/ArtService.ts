import axios from "axios";

export abstract class ArtService {
  protected artApi = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
    timeout: 3000
  })
}
