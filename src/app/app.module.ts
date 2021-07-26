import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiNewregComponent } from './ui-newreg/ui-newreg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CopyTableComponent } from './copy-table/copy-table.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { EditprogramModalComponent } from './editprogram-modal/editprogram-modal.component';



// import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    UiNewregComponent,
    DashboardComponent,
    CopyTableComponent,
    HeaderFooterComponent,
    AgGridComponent,
    EditprogramModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
