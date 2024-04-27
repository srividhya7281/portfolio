import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { VideosComponent } from "./pages/videos/videos.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { EducationComponent } from "./pages/education/education.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, AboutComponent, VideosComponent, ContactComponent, SkillsComponent, EducationComponent]
})
export class AppComponent {
  title = 'portfolio';
}
