import { Component, OnInit } from '@angular/core';
import{FormControl, Validators} from '@angular/forms';

interface loan {
  name: string;

}
interface state {
  name: string;
}

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})

export class ApplyNowComponent implements OnInit {
  title: string = "Apply Now";
  constructor() { }
  ngOnInit(): void {
  }

  loanControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  loans: loan[] = [

    {name: 'Personal loans'},
    {name: 'Business loans'},
    {name: 'Car loans'},
    {name: 'Credit card'},
    {name: 'Home Loans'},
    {name: 'Gold Loan'},
    {name: 'Insurance'},
    {name: 'Fixed Deposite'},
  ];

  stateControl = new FormControl('', Validators.required);
   states: state[] = [
    {name: 'Andhra Pradesh'},{name: 'Arunachal Pradesh'},{name: 'Assam'},{name: 'Bihar'},{name: 'Chhattisgarh'},{name: 'Delhi'},
    {name: 'Goa'},{name: 'Gujarat'},{name: 'Haryana'},{name: 'Himachal Pradesh'},{name: 'Jharkhand'},{name: 'Jammu and Kashmir'},
    {name: 'Karnataka'},{name: 'Kerala'},{name: 'Madhya Pradesh'},{name: 'Maharashtra'},{name: 'Manipur'},{name: 'Meghalaya'},
    {name: 'Mizoram'},{name: 'Nagaland'},{name: 'Odisha'},{name: 'Punjab'},{name: 'Rajasthan'},{name: 'Sikkim'},
    {name: 'Tamil Nadu'},{name: 'Telangana'},{name: 'Tripura'},{name: 'Uttar Pradesh'},{name: 'Uttarakhand'},{name: 'West Bengal'},
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  NameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);
}
