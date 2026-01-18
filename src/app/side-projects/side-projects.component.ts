import { Component, input } from '@angular/core';
import { SideProjects } from '../types';
import { Dot, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-side-projects',
  imports: [LucideAngularModule],
  templateUrl: './side-projects.component.html',
  styleUrl: './side-projects.component.css',
})
export class SideProjectsComponent {
  data = input.required<SideProjects>();
  minusIcon = Dot;
}
