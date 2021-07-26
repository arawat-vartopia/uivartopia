import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Grid } from 'ag-grid-community';
import { EditprogramModalComponent } from '../editprogram-modal/editprogram-modal.component';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {


  gridOptions = {
    columnDefs: [
      { headerName: 'Make', field: 'make', sortable: true, filter: true },
      { headerName: 'Model', field: 'model', sortable: true, filter: true },
      { headerName: 'Price', field: 'price', sortable: true, filter: true }
    ],
    rowData: [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]
  };
  
   /*Dialog Start */
  
   constructor(public dialog: MatDialog) {}

   openDialog(): void {
     const dialogRef = this.dialog.open(EditprogramModalComponent, {
       width: '658px',
     });
 

 
 }

  ngOnInit(): void {

    const img = document.querySelector("#myGrid") as HTMLImageElement;
    console.log(img);
    new Grid(img, this.gridOptions);

  }

  /*Dialog Start */
  // openDialog(){
  //   this.dialog.open(EditprogramModalComponent);
  // } 
   /*Dialog End */
   


}
