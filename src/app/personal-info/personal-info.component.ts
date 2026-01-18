import { Component, input, output } from '@angular/core';
import { PersonalInfo } from '../types';
import { LucideAngularModule, ArrowBigDown } from 'lucide-angular';

@Component({
  selector: 'app-personal-info',
  imports: [LucideAngularModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
})
export class PersonalInfoComponent {
  scrollClicked = output();

  data = input.required<PersonalInfo>();
  ArrowIcon = ArrowBigDown;

  scroll() {
    this.scrollClicked.emit();
  }
}
