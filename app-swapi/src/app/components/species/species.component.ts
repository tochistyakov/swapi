import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { ISpecie } from 'src/app/types/specie.interface';
import { ISpeciesList } from 'src/app/types/speciesList.interface';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  // speciesList: Array<ISpecie> = [];
  public speciesList$!: Observable<ISpeciesList>;

  nextUrl!: string | null;
  previousUrl!: string | null;

  constructor(private appGetApisService: GetApisService) { }

  ngOnInit(): void {
    this.changePage()
  }

  changePage(url?: string | null): void {
    // this.speciesList = [];
    // this.appGetApisService.getSpeciesList(url).pipe(take(1)).subscribe((a) => {
    //   this.speciesList = a.results;
    //   this.nextUrl = a.next;
    //   this.previousUrl = a.previous;
    // });
    if (url === null) url = '';

    this.speciesList$ =  this.appGetApisService.getSpeciesList(url);

  }

}
