import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './presentation/components/hero/hero.component';
import { ProjectsShowcaseComponent } from './presentation/components/projects-showcase/projects-showcase.component';
import { ProfileShowcaseComponent } from './presentation/components/profile-showcase/profile-showcase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, ProjectsShowcaseComponent, ProfileShowcaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';
}
