import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IFilm } from 'src/app/types/film.interface';

@Component({
  selector: 'app-current-film',
  templateUrl: './current-film.component.html',
  styleUrls: ['./current-film.component.scss']
})
export class CurrentFilmComponent implements OnInit {

  public films$!: Observable<IFilm>;
  private id: number;

  constructor(public appGetApisService: GetApisService, private route: ActivatedRoute) {
    this.id = 0;
    appGetApisService.isError = false;
   }

  ngOnInit(): void {
    this.films$ = this.route.params.pipe(
      switchMap((params: Params) => {
      this.id = params['id'];
      return this.appGetApisService.getFilm(this.id);
    }))
  }

}
