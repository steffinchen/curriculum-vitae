import { Component, input } from '@angular/core';
import { Experience } from '../types';
import { Dot, LucideAngularModule, Minus } from 'lucide-angular';

@Component({
  selector: 'app-experience',
  imports: [LucideAngularModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  data = input.required<Experience>();
  minusIcon = Dot;
}
