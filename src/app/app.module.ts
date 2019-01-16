import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HowItWorksComponent } from './components/pages/how-it-works/how-it-works.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { WorkComponent } from './components/pages/work/work.component';
import { HelpComponent } from './components/help/help.component';
import { FindTutorsComponent } from './components/find-tutors/find-tutors/find-tutors.component';
import { FindTutorsProfileComponent } from './components/find-tutors/find-tutors-profile/find-tutors-profile.component';
import { TutorApplicationComponent } from './components/tutor-application/tutor-application.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HowItWorksComponent,
    PrivacyComponent,
    WorkComponent,
    HelpComponent,
    FindTutorsComponent,
    FindTutorsProfileComponent,
    TutorApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
