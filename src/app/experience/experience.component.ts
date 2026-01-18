import { Component, input } from '@angular/core';
import { Experience } from '../types';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  data = input.required<Experience>();
}
