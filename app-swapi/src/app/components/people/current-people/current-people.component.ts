import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IPeople } from 'src/app/types/people.interface';

@Component({
  selector: 'app-current-people',
  templateUrl: './current-people.component.html',
  styleUrls: ['./current-people.component.scss']
})
export class CurrentPeopleComponent implements OnInit {
  
  public people$!: Observable<IPeople>;
  private id: number;

  constructor(private appGetApisService: GetApisService, private route: ActivatedRoute) {
    this.id = 0;
   }

  ngOnInit(): void {
    this.people$ = this.route.params.pipe(
      switchMap((params: Params) => {
      this.id = params['id'];
      return this.appGetApisService.getPeople(this.id);
    }))
  }
}
