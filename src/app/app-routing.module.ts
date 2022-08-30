import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogRegPageComponent } from './log-reg-page/log-reg-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { AuthenticationGuardGuard } from './authentication-guard.guard';


const routes: Routes = [{
 path: '',
 component: LandingPageComponent,
},
{
  path:  'login',
  component: LogRegPageComponent
      // Actually quite dumb! Why authenticate for the authenticate page???
},
{
path: 'register',
component: LogRegPageComponent
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthenticationGuardGuard]  
},
//WildCard
{
path: '**',
component: NotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
