import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import cvData from './cv.json';
import { ExperienceComponent } from './experience/experience.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { NgClass } from '@angular/common';
import { LucideAngularModule, MenuIcon } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ExperienceComponent,
    PersonalInfoComponent,
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
