import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const route: Routes = [{
  path: 'heroes',
  component: HeroComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'detail/:id',
  component: HeroDetailComponent
}, {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
