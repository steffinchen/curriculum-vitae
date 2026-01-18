import { Component, input } from '@angular/core';
import { Education } from '../types';
import { Dot, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-education',
  imports: [LucideAngularModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  data = input.required<Education>();
  minusIcon = Dot;
}
