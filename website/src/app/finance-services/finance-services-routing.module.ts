import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { GoldLoanComponent } from './gold-loan/gold-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ApplyNowComponent } from '../page/apply-now/apply-now.component';

const routes: Routes = [
  {
    path: 'service', children: [
      { path: 'business-loan', component: BusinessLoanComponent },
      { path: 'car-loan', component: CarLoanComponent },
      { path: 'home-loan', component: HomeLoanComponent },
      { path: 'personal-loan', component: PersonalLoanComponent },
      { path: 'gold-loan', component: GoldLoanComponent },
      { path: 'fixed-deposit', component: FixedDepositComponent },
      { path: 'credit-card', component: CreditCardComponent },
      { path: 'insurance', component: InsuranceComponent },
      {path:'./page/-apply-now', component:ApplyNowComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceServicesRoutingModule { }
