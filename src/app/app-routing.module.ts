import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogRegPageComponent } from './log-reg-page/log-reg-page.component';


const routes: Routes = [{
 path: '',
 component: LandingPageComponent,
},
{
  path:  'login',
  component: LogRegPageComponent
},
{
path: 'register',
component: LogRegPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
