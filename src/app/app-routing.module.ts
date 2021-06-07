import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiNewregComponent } from './ui-newreg/ui-newreg.component';
import {CopyTableComponent} from './copy-table/copy-table.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'redirect-ui', component: UiNewregComponent
  },
  {
    path: 'copytable-ui', component: CopyTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
