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
} from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  data = input.required<PersonalInfo>();
  MailIcon = Mail;
  MapPinIcon = MapPin;
  LinkedInIcon = Linkedin;
  GithubIcon = Github;
  GlobeIcon = Globe;
  PhoneIcon = Phone;
}
