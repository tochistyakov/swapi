import { IPlanet } from "./planet.interface";

export interface IPlanetsList {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<IPlanet>
}