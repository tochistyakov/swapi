
import { IPeople } from "./people.interface";


export interface IPeopleList {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<IPeople>
}