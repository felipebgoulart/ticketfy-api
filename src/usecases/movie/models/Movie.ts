import { Genre } from "./Genre";

export class Movie {
  id: string;
  title: string;
  synopsis: string;
  genre_ids: Genre[];
  note_average: number;
  poster_url: string;
  release_date: string
}
