import { Component, input } from '@angular/core';
import { Presentations } from '../types';
import { Dot, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-presentations',
  imports: [LucideAngularModule],
  templateUrl: './presentations.component.html',
  styleUrl: './presentations.component.css',
})
export class PresentationsComponent {
  data = input.required<Presentations>();
  minusIcon = Dot;
}
