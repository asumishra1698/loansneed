import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  term: string;
  Eligibility: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { term: 'Age criteria:', Eligibility:'Entry Age: 18 years to 65 years'},
  { term: 'Policy Term:', Eligibility:'	58 to 68 years' },
  { term: 'Basic Sum Assured amount:', Eligibility:'	Salaried individual, Business individual, Self employed professional etc' },
  { term: 'Premium:', Eligibility:'	Rs. 15,000 for non metro cities and Rs 20,000 for metro cities' },
  { term: 'Premium Payment Term:', Eligibility:'12 - 72 months' },
];

@Component({
  selector: 'app-fixed-deposit',
  templateUrl: './fixed-deposit.component.html',
  styleUrls: ['./fixed-deposit.component.css']
})
export class FixedDepositComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string = "FIXED DEPOSIT";
  panelOpenState = false;
  displayedColumns: string[] = ['term', 'Eligibility'];
  dataSource = ELEMENT_DATA;
}
