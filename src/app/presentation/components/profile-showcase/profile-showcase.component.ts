import { Component, inject, computed } from '@angular/core';
import { ProfileService } from '../../../data/services/profile.service';

@Component({
  selector: 'app-profile-showcase',
  standalone: true,
  templateUrl: './profile-showcase.component.html',
  styleUrl: './profile-showcase.component.scss'
})
export class ProfileShowcaseComponent {
  private profileService = inject(ProfileService);

  // Obtenemos los Signals principales 
  skills = this.profileService.getSkills;
  private allEducation = this.profileService.getEducation;

  // Derivamos el estado reactivamente para separar grados de certificados
  degrees = computed(() => this.allEducation().filter(item => item.type === 'degree'));
  certificates = computed(() => this.allEducation().filter(item => item.type === 'certificate'));
}