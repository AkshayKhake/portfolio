import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { HomeComponent } from './profile/home/home.component';
import { EduCertificateComponent } from './profile/edu-certificate/edu-certificate.component';

const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo:'home'},
  {path:"project", component:ProjectsComponent},
  {path:"skill", component:SkillsComponent},
  {path:"home", component:HomeComponent},
  {path:"edu-cer", component:EduCertificateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
