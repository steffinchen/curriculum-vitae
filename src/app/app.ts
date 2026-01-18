import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import cvData from './cv.json';
import { ExperienceComponent } from './experience/experience.component';
import { NgClass } from '@angular/common';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExperienceComponent, NgClass, FaIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  faBars = faBars;

  cvData = cvData;

  collapsed = true;

  constructor() {
    console.log('data', cvData);
  }
}
