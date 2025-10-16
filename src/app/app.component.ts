import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <main class="p-6 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Portafolio</h1>
      <p class="mb-6 text-slate-600">
        Angular Material + Tailwind funcionando.
      </p>
      <div class="flex gap-3">
        <button mat-raised-button color="primary">Material OK</button>
        <button class="px-4 py-2 rounded-lg bg-slate-900 text-white">
          Tailwind OK
        </button>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';
}
