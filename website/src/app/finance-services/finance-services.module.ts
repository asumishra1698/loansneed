import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceServicesRoutingModule } from './finance-services-routing.module';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { GoldLoanComponent } from './gold-loan/gold-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CreditCardComponent } from './credit-card/credit-card.component';


@NgModule({
  declarations: [
    PersonalLoanComponent,
    BusinessLoanComponent,
    CarLoanComponent,
    FixedDepositComponent,
    GoldLoanComponent,
    HomeLoanComponent,
    InsuranceComponent,
    CreditCardComponent
  ],
  imports: [
    CommonModule,
    FinanceServicesRoutingModule
  ]
})
export class FinanceServicesModule { }
