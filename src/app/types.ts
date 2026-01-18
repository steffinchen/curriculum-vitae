import cvData from './cv.json';

export type CV = typeof cvData;
export type PersonalInfo = typeof cvData.personalInfo;
export type Experience = typeof cvData.experience;
export type ExperienceEntry = (typeof cvData.experience.entries)[number];
export type Responsibility = (typeof cvData.experience.entries)[number]['responsibilities'][number];
export type Skills = typeof cvData.skills;
export type SkillCategory = (typeof cvData.skills.categories)[number];
export type Presentations = typeof cvData.presentations;
export type PresentationEntry = (typeof cvData.presentations.entries)[number];
export type PresentationDetail = (typeof cvData.presentations.entries)[number]['details'][number];
export type Education = typeof cvData.education;
export type EducationEntry = (typeof cvData.education.entries)[number];
export type EducationDetail = (typeof cvData.education.entries)[number]['details'][number];
export type SideProjects = typeof cvData.sideProjects;
export type SideProjectEntry = (typeof cvData.sideProjects.entries)[number];
