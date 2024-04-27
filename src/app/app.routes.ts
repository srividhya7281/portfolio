import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { VideosComponent } from './pages/videos/videos.component';

export const routes: Routes = [
      
          {path:'home',component:HomeComponent},
          {path: 'about', component:AboutComponent},
          {path:'contact', component:ContactComponent},
          {path:'education', component:EducationComponent},
          {path:'skills', component:SkillsComponent},
          {path:'education', component:EducationComponent},
          {path:'videos', component:VideosComponent}
];
