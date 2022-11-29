import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IPlanet } from 'src/app/types/planet.interface';
import { IPlanetsList } from 'src/app/types/planetList.interface';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  // planetsList: Array<IPlanet> = [];
  public planetsList$!: Observable<IPlanetsList>;
  nextUrl!: string | null;
  previousUrl!: string | null;

  constructor(private appGetApisService: GetApisService) { }

  ngOnInit(): void {
    this.changePage()
  }

  changePage(url?: string | null): void {
    // this.planetsList = [];
    // this.appGetApisService.getPlanetsList(url).pipe(take(1)).subscribe((a) => {
    //   this.planetsList = a.results;
    //   this.nextUrl = a.next;
    //   this.previousUrl = a.previous;
    // });

    if (url === null) url = '';

    this.planetsList$ =  this.appGetApisService.getPlanetsList(url);

  }

}
