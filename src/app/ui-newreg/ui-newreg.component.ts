import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-newreg',
  templateUrl: './ui-newreg.component.html',
  styleUrls: ['./ui-newreg.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UiNewregComponent implements OnInit {

  isLinear = false;
  showFiller = false;

  public screenWidth: any;
  public screenHeight: any;
  loader = true;


  // private secondFormGroup: FormGroup, private firstFormGroup: FormGroup
  public firstFormGroup: any;
  public secondFormGroup: any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    setTimeout(() => {
      this.loader = false
    }, 2500);

    //Responsive fix//
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    console.log(this.screenWidth, this.screenHeight);

  }

}
