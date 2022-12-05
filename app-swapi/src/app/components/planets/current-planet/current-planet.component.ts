import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IPlanet } from 'src/app/types/planet.interface';

@Component({
  selector: 'app-current-planet',
  templateUrl: './current-planet.component.html',
  styleUrls: ['./current-planet.component.scss']
})
export class CurrentPlanetComponent implements OnInit {

  public planet$!: Observable<IPlanet>;
  private id: number;

  constructor(public appGetApisService: GetApisService, private route: ActivatedRoute) {
    this.id = 0;
    appGetApisService.isError = false;
   }

  ngOnInit(): void {
    this.planet$ = this.route.params.pipe(
      switchMap((params: Params) => {
      this.id = params['id'];
      return this.appGetApisService.getPlanet(this.id);
    }))
    

  }

}
