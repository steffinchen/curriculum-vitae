import { Component, input } from '@angular/core';
import { PersonalInfo } from '../types';
import {
  LucideAngularModule,
  Mail,
  Globe,
  Linkedin,
  Github,
  Phone,
  MapPin,
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
  MailIcon = Mail;
  MapPinIcon = MapPin;
  LinkedInIcon = Linkedin;
  GithubIcon = Github;
  GlobeIcon = Globe;
  PhoneIcon = Phone;
  ArrowIcon = ArrowBigDown;
}
