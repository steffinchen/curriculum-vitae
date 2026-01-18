import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import cvData from './cv.json';
import { ExperienceComponent } from './experience/experience.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsComponent } from './skills/skills.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { EducationComponent } from './education/education.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { NgClass } from '@angular/common';
import { LucideAngularModule, MenuIcon } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ExperienceComponent,
    PersonalInfoComponent,
    SkillsComponent,
    PresentationsComponent,
    EducationComponent,
    SideProjectsComponent,
    NgClass,
    LucideAngularModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menuIcon = MenuIcon;

  cvData = cvData;

  collapsed = true;
}
