import { Pipe, PipeTransform } from '@angular/core';
import { GetApisService } from '../services/get-apis.service';

@Pipe({
  name: 'nameFromApi',
  pure: false
})
export class NameFromApiPipe implements PipeTransform {
  
  public val: string;
  private type: string = '';
  private id: number = 0;
  private item!: any;
  private requestedUrl = '';

  constructor(private appGetApisService: GetApisService) {
    this.val = '';
  }

  transform(url: string): string {

    this.type = url.split('/')[4];
    this.id = +url.split('/')[5];

    if (!this.val && url !== this.requestedUrl) {
      this.requestedUrl = url;
      this.appGetApisService.getItem(url).subscribe(data => {
        if (this.type === 'films') {
          this.val = data.title; 
        } else this.val = data.name;
        
      });
    }

    return this.val;
  }

}
