import { Component, input } from '@angular/core';
import { Skills } from '../types';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  data = input.required<Skills>();
}
