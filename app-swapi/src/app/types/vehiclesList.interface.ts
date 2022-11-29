import { IVehicle } from "./vehicle.interface";

export interface IVehiclesList {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<IVehicle>
}