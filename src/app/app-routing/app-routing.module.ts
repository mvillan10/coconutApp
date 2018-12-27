import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ErrorComponent } from '../error/error.component';
import { MainComponent } from '../main/main.component';



const routes:Routes=[
{path:'',component:HomeComponent},
{path:'404',component:ErrorComponent},
{path:'about',component:AboutComponent},
{path:'home',component:HomeComponent},
{path:'main',component:MainComponent},
{path:'**',redirectTo:'/404'}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y]
    })
  ],

  exports:[
    RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
