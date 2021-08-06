import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  Required: string;
  Eligibility: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Required: 'Minimum age limit', Eligibility:'	21 to 28 years' },
  { Required: 'Maximum age limit', Eligibility:'	58 to 68 years' },
  { Required: 'Employment type', Eligibility:'	Salaried individual, Business individual, Self employed professional etc' },
  { Required: 'Income limit', Eligibility:'	Rs. 15,000 for non metro cities and Rs 20,000 for metro cities' },
  { Required: 'Loan Tenure', Eligibility:'12 - 72 months' },
];

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css']
})
export class PersonalLoanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string = "PERSONAL LOAN";
  panelOpenState = false;

  displayedColumns: string[] = ['Required', 'Eligibility'];
  dataSource = ELEMENT_DATA;
}
