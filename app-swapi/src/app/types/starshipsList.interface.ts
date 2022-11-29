import { IStarship } from "./starship.interface";

export interface IStarshipsList {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<IStarship>
}