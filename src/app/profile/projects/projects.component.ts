import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isVisible:boolean=false;

  onclick(){
    this.isVisible=!this.isVisible;
    console.log(this.isVisible);
  }
}
