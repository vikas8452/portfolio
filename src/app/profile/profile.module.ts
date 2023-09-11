import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PublicationsComponent } from '../profile/publications/publications.component';
import { AngularParticleEsModule } from 'angular-particle-es/lib/angular-particle-es.module';
import { ParticlesModule } from 'angular-particle';
import { ParticleComponent } from './particle/particle.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VideoComponent } from './video/video.component';
import {
  MatExpansionModule,
} from '@angular/material/expansion';
import {
  MatListModule
} from '@angular/material/list'
// import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatExpansionModule,
    MatListModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    IntroComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    PublicationsComponent,
    ParticleComponent,
    VideoComponent
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ProfileModule { }
