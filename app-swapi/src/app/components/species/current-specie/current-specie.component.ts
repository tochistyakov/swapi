import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { ISpecie } from 'src/app/types/specie.interface';

@Component({
  selector: 'app-current-specie',
  templateUrl: './current-specie.component.html',
  styleUrls: ['./current-specie.component.scss']
})
export class CurrentSpecieComponent implements OnInit {

  public specie$!: Observable<ISpecie>;
  private id: number;

  constructor(public appGetApisService: GetApisService, private route: ActivatedRoute) { 
    this.id = 0;
    appGetApisService.isError = false;
  }

  ngOnInit(): void {
    this.specie$ = this.route.params.pipe(
      switchMap((params: Params) => {
      this.id = params['id'];
      return this.appGetApisService.getSpecie(this.id);
    }))
  }

}
