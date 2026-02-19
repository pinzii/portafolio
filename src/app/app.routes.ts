import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ProjectsComponent } from './features/projects/pages/projects/projects.component';
import { AboutComponent } from './features/about/pages/about/about.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';

export const routes: Routes = [
   {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ],
   },
   { path: '**', redirectTo: '' },
];
