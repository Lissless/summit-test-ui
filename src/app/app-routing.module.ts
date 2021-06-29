import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'search', component:SearchComponent},
  {path:'add', component:AddPersonComponent},
  {path:'delete', component:DeletePersonComponent},
  {path:'view', component:ViewPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
