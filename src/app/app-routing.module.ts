import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"vedio",
    component:VedioComponent
  },
  {
    path:"contactMe",
    component:ContactMeComponent
  },
  {
    path:"contactInstitute",
    component:ContactInstituteComponent
  },
  {
    path :"socialMedia",
    component:SocialMediaComponent
  },
  {
    path :"aboutMe",
    component:AboutMeComponent
  },
  {
    path :"qualifications",
    component:QualificationsComponent
  },
  {
    path :"contactUs",
    component:ContactUsComponent
  },
  {
    path :"rates",
    component:RatesComponent
  },
  {
    path :"classes",
    component:ClassesComponent
  },
  {
    path :"LogVedios",
    component:LogVediosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
