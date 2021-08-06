import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    BecomeAPartnerComponent,
    ApplyNowComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
