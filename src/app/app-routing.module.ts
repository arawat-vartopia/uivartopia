import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiNewregComponent } from './ui-newreg/ui-newreg.component';
import { CopyTableComponent} from './copy-table/copy-table.component'
import { HeaderFooterComponent} from './header-footer/header-footer.component';
import {AgGridComponent} from './ag-grid/ag-grid.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'redirect-ui', component: UiNewregComponent
  },
  {
    path: 'copytable-ui', component: CopyTableComponent
  },
  {
    path: 'headerfooter-ui', component: HeaderFooterComponent
  },
  {
    path: 'ag-grid-ui', component: AgGridComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
