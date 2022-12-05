import { Pipe, PipeTransform } from '@angular/core';
import { finalize, Observable, share, take, tap } from 'rxjs';
import { GetApisService } from '../services/get-apis.service';

@Pipe({
  name: 'nameFromApi',
  pure: false
})
export class NameFromApiPipe implements PipeTransform {
  
  public val: string = '';
  private type: string = '';
  public id: number = 0;
  private requestedUrl = '';

  constructor(private appGetApisService: GetApisService) {
    
  }

  transform(url: string): string {

    this.type = url.split('/')[4];
    this.id = +url.split('/')[5];

    if (!this.val && url !== this.requestedUrl) {
      this.requestedUrl = url;
      const sub: any = this.appGetApisService.getItem(url)
      .pipe(
        take(1),
        tap(data => {
          if (this.type === 'films') {
            this.val = data.title; 
          } else this.val = data.name;
        }),
        finalize(() => {
          sub.unsubscribe();
        }),
        share()
      )
      .subscribe();
    }
    console.log('Why is this being called 40 times for 1 pipe???')
    return this.val;
  }

}
