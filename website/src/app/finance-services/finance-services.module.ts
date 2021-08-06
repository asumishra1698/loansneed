import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


import { FinanceServicesRoutingModule } from './finance-services-routing.module';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { GoldLoanComponent } from './gold-loan/gold-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';

@NgModule({
  declarations: [
    PersonalLoanComponent,
    BusinessLoanComponent,
    GoldLoanComponent,
    HomeLoanComponent,
    CreditCardComponent,
    InsuranceComponent,
    CarLoanComponent,
    FixedDepositComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    CdkAccordionModule,
    FinanceServicesRoutingModule
  ]
})
export class FinanceServicesModule { }
