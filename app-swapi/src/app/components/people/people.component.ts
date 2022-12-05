import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GetApisService } from 'src/app/services/get-apis.service';
import { IPeople } from 'src/app/types/people.interface';
import { IPeopleList } from 'src/app/types/peopleList.interface';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  // peopleList: Array<IPeople> =[];
  public peopleList$!: Observable<IPeopleList>;
  nextUrl!: string | null;
  previousUrl!: string | null;

  constructor(private appGetApisService: GetApisService) { }

  ngOnInit(): void {
    this.changePage();
  }

  changePage(url?: string | null): void {
    // this.peopleList = [];
    // this.appGetApisService.getPeopleList(url).pipe(take(1)).subscribe((a) => {
    //   this.peopleList = a.results;
    //   this.nextUrl = a.next;
    //   this.previousUrl = a.previous;
    // });

    if (url === null) url = '';

    this.peopleList$ =  this.appGetApisService.getPeopleList(url);

    console.log(url);
    
    // this.peopleList$.subscribe((data) => {console.log(data)});
  }
  

}
