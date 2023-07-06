import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form')
  addPropertyForm!: NgForm; 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnBack()
  {
    this.router.navigate(['/']);
  }

  // 1st approach commented 
  //OnSubmit(Form: NgForm)
  OnSubmit()
  {

  }

}
