/**
 * Created by Konstantin on 28.06.2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from "./list-clients/list-clients.component";
import {RegistrationComponent} from "./registration/registration.component";



const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'list-clients',  component: ListClientsComponent },
  { path: 'registration',  component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
