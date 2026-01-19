import { Component, signal, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import cvData from './cv.json';
import { ExperienceComponent } from './experience/experience.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsComponent } from './skills/skills.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { EducationComponent } from './education/education.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { ContactComponent } from './contact/contact.component';
import { NgClass } from '@angular/common';
import { LucideAngularModule, MenuIcon } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [
    ExperienceComponent,
    PersonalInfoComponent,
    SkillsComponent,
    PresentationsComponent,
    EducationComponent,
    SideProjectsComponent,
    ContactComponent,
    NgClass,
    LucideAngularModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  menuIcon = MenuIcon;
  cvData = cvData;

  collapsed = true;

  activeSection = signal<string>('about');

  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer?.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    const sections = ['about', 'experience', 'skills', 'conference-talks', 'education', 'side-projects', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        this.observer?.observe(element);
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.collapsed = true;
    }
  }
}
