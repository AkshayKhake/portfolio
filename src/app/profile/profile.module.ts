import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EduCertificateComponent } from './edu-certificate/edu-certificate.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    HomeComponent,
    EduCertificateComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    EduCertificateComponent,
    ProjectsComponent,
    SkillsComponent
  ]
})
export class ProfileModule { }
