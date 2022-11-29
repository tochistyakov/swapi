import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IVehicle } from 'src/app/types/vehicle.interface';
import { IVehiclesList } from 'src/app/types/vehiclesList.interface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  // vehiclesList: Array<IVehicle> = [];
  public vehiclesList$!: Observable<IVehiclesList>;

  // nextUrl!: string | null;
  // previousUrl!: string | null;

  constructor(private appGetApisService: GetApisService) { }

  ngOnInit(): void {
    this.changePage()
  }

  changePage(url?: string): void {
    // this.vehiclesList = [];
    // this.appGetApisService.getVehiclesList(url).pipe(take(1)).subscribe((a) => {
    //   this.vehiclesList = a.results;
    //   this.nextUrl = a.next;
    //   this.previousUrl = a.previous;
    // });

    
    if (url === null) url = '';

    this.vehiclesList$ =  this.appGetApisService.getVehiclesList(url);
  }

}
