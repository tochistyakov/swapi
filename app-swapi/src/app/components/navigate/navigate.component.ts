import { Component, OnInit } from '@angular/core';
import { GetApisService } from 'src/app/services/get-apis.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  menuList: Array<string> = [];

  constructor(private appGetApisService: GetApisService) { }

  ngOnInit(): void {
    this.appGetApisService.getMenuList().subscribe((a) => {
      this.menuList = Object.keys(a);
      // console.log(this.menuList);
    });
  }

}
