import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessewsComponent } from './businessnews/businessnews.component';
import { SportsComponent } from './sportsnews/sportsnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [

{path:'',component:TopheadingComponent},//home
{path:'tech',component:TechnewsComponent},
{path:'business',component:BusinessewsComponent},
{path:'sports',component:SportsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
