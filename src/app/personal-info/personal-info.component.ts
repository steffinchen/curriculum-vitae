import { Component, input } from '@angular/core';
import { PersonalInfo } from '../types';
import {
  LucideAngularModule,
  ArrowBigDown,
} from 'lucide-angular';

@Component({
  selector: 'app-personal-info',
  imports: [LucideAngularModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
})
export class PersonalInfoComponent {
  data = input.required<PersonalInfo>();
  ArrowIcon = ArrowBigDown;
}
