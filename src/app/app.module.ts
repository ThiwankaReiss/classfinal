import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { VedioComponent } from './pages/vedio/vedio.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ContactInstituteComponent } from './pages/contact-institute/contact-institute.component';
import { SocialMediaComponent } from './pages/social-media/social-media.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { QualificationsComponent } from './pages/qualifications/qualifications.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RatesComponent } from './pages/rates/rates.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { LogVediosComponent } from './pages/log-vedios/log-vedios.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent,
    VedioComponent,
    ContactMeComponent,
    ContactInstituteComponent,
    SocialMediaComponent,
    AboutMeComponent,
    QualificationsComponent,
    ContactUsComponent,
    RatesComponent,
    ClassesComponent,
    LogVediosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
