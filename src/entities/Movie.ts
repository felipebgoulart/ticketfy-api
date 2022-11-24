import { Genre } from "./Genre";

export class Movie {
  id: string;
  title: string;
  overview: string;
  genre_ids: Genre[];
  note_average: number;
  poster_url: string;
  release_date: string;
  popularity?: number;
}
