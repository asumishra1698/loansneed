import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-loan',
  templateUrl: './car-loan.component.html',
  styleUrls: ['./car-loan.component.css']
})
export class CarLoanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string = "CAR LOAN";
  panelOpenState = false;
}
