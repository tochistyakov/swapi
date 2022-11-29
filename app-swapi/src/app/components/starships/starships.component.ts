import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IStarship } from 'src/app/types/starship.interface';
import { IStarshipsList } from 'src/app/types/starshipsList.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  // starshipsList: Array<IStarship> = [];
  public starshipsList$!: Observable<IStarshipsList>;

  // nextUrl!: string | null;
  // previousUrl!: string | null;
  
  constructor(private appGetApisService: GetApisService) { }

  ngOnInit(): void {
    this.changePage()
  }

  changePage(url?: string): void {
    // this.starshipsList = [];
    // this.appGetApisService.getStarshipsList(url).pipe(take(1)).subscribe((a) => {
    //   this.starshipsList = a.results;
    //   this.nextUrl = a.next;
    //   this.previousUrl = a.previous;
    // });

    if (url === null) url = '';

    this.starshipsList$ =  this.appGetApisService.getStarshipsList(url);
  }
}
