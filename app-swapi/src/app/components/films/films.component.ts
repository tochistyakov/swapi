import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IFilm } from 'src/app/types/film.interface';
import { IFilmsList } from 'src/app/types/filmsList.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  // filmsList: Array<IFilm> =[];
  public filmsList$!: Observable<IFilmsList>;

  nextUrl!: string | null;
  previousUrl!: string | null;

  constructor(private appGetApisService: GetApisService) { }

  ngOnInit(): void {
    this.changePage();
  }

  changePage(url?: string | null): void {
    // this.filmsList = [];
    // this.appGetApisService.getFilmsList(url).pipe(take(1)).subscribe((a) => {
    //   this.filmsList = a.results;
    //   this.nextUrl = a.next;
    //   this.previousUrl = a.previous;
    // });

    if (url === null) url = '';

    this.filmsList$ =  this.appGetApisService.getFilmsList(url);

  }

}
