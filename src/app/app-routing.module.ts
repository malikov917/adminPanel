/**
 * Created by Konstantin on 28.06.2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from "./list-clients/list-clients.component";



const routes: Routes = [
  { path: '', redirectTo: '/list-clients', pathMatch: 'full' },
  { path: 'list-clients',  component: ListClientsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
