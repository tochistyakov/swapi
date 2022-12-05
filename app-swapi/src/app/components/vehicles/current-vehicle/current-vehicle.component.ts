import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IVehicle } from 'src/app/types/vehicle.interface';

@Component({
  selector: 'app-current-vehicle',
  templateUrl: './current-vehicle.component.html',
  styleUrls: ['./current-vehicle.component.scss']
})
export class CurrentVehicleComponent implements OnInit {

  public vehicle$!: Observable<IVehicle>;
  private id: number;

  constructor(public appGetApisService: GetApisService, private route: ActivatedRoute) { 
    this.id = 0;
    appGetApisService.isError = false;
  }

  ngOnInit(): void {
    this.vehicle$ = this.route.params.pipe(
      switchMap((params: Params) => {
      this.id = params['id'];
      return this.appGetApisService.getVehicle(this.id);
    }))
  }

}
