import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IStarship } from 'src/app/types/starship.interface';

@Component({
  selector: 'app-current-starship',
  templateUrl: './current-starship.component.html',
  styleUrls: ['./current-starship.component.scss']
})
export class CurrentStarshipComponent implements OnInit {

  public starship$!: Observable<IStarship>;
  private id: number;
  
  constructor(private appGetApisService: GetApisService, private route: ActivatedRoute) {
    this.id = 0;
   }

  ngOnInit(): void {
    this.starship$ = this.route.params.pipe(
      switchMap((params: Params) => {
      this.id = params['id'];
      return this.appGetApisService.getStarship(this.id);
    }))
  }

}
