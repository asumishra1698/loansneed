import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';


import { PageRoutingModule } from './page-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { FaqComponent } from './faq/faq.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    ApplyNowComponent,
    FaqComponent,
    BecomeAPartnerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    PageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    CdkAccordionModule,
  ]
})
export class PageModule { }
