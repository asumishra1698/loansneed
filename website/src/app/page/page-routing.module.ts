import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'page', children: [
      { path: 'About-Us', component: AboutUsComponent },
      { path: 'apply-now', component: ApplyNowComponent },
      { path: 'contact-us', component: ContactUsComponent },
      {path:'faq', component: FaqComponent},
      {path:' BecomeAPartnerComponent', component:  BecomeAPartnerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
