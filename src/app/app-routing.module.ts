import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiNewregComponent } from './ui-newreg/ui-newreg.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'redirect-ui', component: UiNewregComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
