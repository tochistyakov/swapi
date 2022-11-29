import { ISpecie } from "./specie.interface";

export interface ISpeciesList {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<ISpecie>
}