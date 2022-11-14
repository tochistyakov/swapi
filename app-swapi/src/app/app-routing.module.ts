import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { NavigateComponent } from './components/navigate/navigate.component';

const routes: Routes = [
  {path: '', component: NavigateComponent},
  {path: 'listItems', component: ListItemsComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
