import { IFilm } from "./film.interface";

export interface IFilmsList {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<IFilm>
}