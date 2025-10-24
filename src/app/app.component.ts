import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule],
  template: `
  <!-- NAVBAR glass -->
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="glass mx-auto max-w-6xl mt-4 rounded-2xl px-4 py-3 flex items-center">
        <div class="ml-auto hidden md:flex gap-2">
        <a class="px-4 py-2 rounded-xl hover:bg-white/5" href="#projects">Proyectos</a>
        <a class="px-4 py-2 rounded-xl hover:bg-white/5" href="#about">Sobre mí</a>
        <a class="px-4 py-2 rounded-xl hover:bg-white/5" href="#contact">Contacto</a>
      </div>
      <a href="#contact" class="btn-neon ml-3">Escríbeme</a>
    </nav>
  </header>

  <!-- HERO -->
  <section class="pt-32 md:pt-40 px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 class="title-display text-6xl md:text-7xl leading-none tracking-tight">
          Portafolio <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-300">Next-Gen</span>
        </h1>
        <p class="mt-5 text-lg text-[color:var(--muted)] max-w-prose">
          Interfaces con <strong>Angular</strong>, <strong>Material</strong> y <strong>Tailwind</strong>.  
          Animaciones, gradientes neón y diseño tipo landing de videojuego.
        </p>
        <div class="mt-7 flex gap-3">
          <a href="#projects" class="btn-neon">Ver proyectos</a>
          <button mat-raised-button color="primary">Descargar CV</button>
        </div>

        <!-- Marquee shimmer -->
        <div class="shimmer glass rounded-2xl mt-8 p-4 text-sm text-[color:var(--muted)]">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full" style="background:var(--lime)"></span>
            Disponible para colaborar • Angular · Material · Tailwind · Charts · Animaciones
          </div>
        </div>
      </div>

      <!-- Panel right (hero visual) -->
      <div class="relative">
        <div class="card-neo h-[360px] md:h-[440px]">
          <div class="absolute -inset-1 rounded-3xl"
               style="background:
                radial-gradient(600px 300px at 10% 10%, rgba(255,77,210,.15), transparent 60%),
                radial-gradient(600px 300px at 90% 90%, rgba(71,231,255,.15), transparent 60%);">
          </div>
          <div class="relative z-10 grid place-items-center h-full">
            <div class="title-display text-5xl md:text-6xl">VI•STYLE</div>
            <div class="mt-4 text-[color:var(--muted)]">Dark + Neon + Glass</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="title-display text-5xl mb-6">Proyectos</h2>
      <p class="text-[color:var(--muted)] mb-8">Tus dos proyectos destacados en tarjetas con brillo.</p>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Card 1 -->
        <article class="card-neo">
          <div class="flex items-center justify-between">
            <h3 class="title-display text-3xl">Admin Dashboard</h3>
            <span class="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">Angular</span>
          </div>
          <p class="mt-2 text-[color:var(--muted)]">
            Login/registro, KPIs, tabla de usuarios, gráficos.
          </p>
          <div class="mt-5 flex gap-3 relative z-10">
            <a class="btn-neon flex items-center gap-2 z-10" 
              href="https://admin-dashboard-pinz.netlify.app"
              target="_blank" rel="noopener noreferrer">
              <span class="material-icons text-sm">play_arrow</span>Demo
            </a>
            <a class="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/5 flex items-center gap-2 z-10"
               href="https://github.com/pinzii/admin-dashboard"
               target="_blank" rel="noopener noreferrer">
               <span class="material-icons text-sm">code</span> GitHub
            </a>
          </div>
        </article>

        <!-- Card 2 -->
        <article class="card-neo">
          <div class="flex items-center justify-between">
            <h3 class="title-display text-3xl">Product Manager App</h3>
            <span class="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">Angular</span>
          </div>
          <p class="mt-2 text-[color:var(--muted)]">
            Listado de productos, filtros y ordenamiento con Material.
          </p>
          <div class="mt-5 flex gap-3 relative z-10">
            <a class="btn-neon flex items-center gap-2 z-10"
              href="https://app-product-manager.netlify.app" 
              target="_blank" rel="noopener noreferrer">
              <span class="material-icons text-sm">play_arrow</span> Demo
            </a>
            <a class="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/5 flex items-center gap-2 z-10"
               href="https://github.com/pinzii/product-manager-app" 
               target="_blank" rel="noopener noreferrer">
               <span class="material-icons text-sm">code</span>GitHub</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="px-6 py-16">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div>
        <h2 class="title-display text-5xl mb-6">Sobre mí</h2>
        <p class="text-[color:var(--muted)] leading-relaxed">
          Desarrollador frontend junior enfocado en Angular. Me gusta crear
          interfaces con estética **dark + neon**, micro-interacciones y performance.
        </p>
      </div>
      <div class="card-neo min-h-[220px]"></div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="px-6 pb-24">
    <div class="max-w-6xl mx-auto glass rounded-3xl p-8">
      <h2 class="title-display text-4xl mb-4">Hablemos</h2>
      <p class="text-[color:var(--muted)] mb-6">Escríbeme para colaborar o revisar ideas.</p>
      <div class="flex flex-wrap gap-3">
        <a class="btn-neon" href="mailto:tucorreo@ejemplo.com">Enviar email</a>
        <a class="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/5" href="#" target="_blank">LinkedIn</a>
        <a class="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/5" href="#" target="_blank">GitHub</a>
      </div>
    </div>
  </section>

  <footer class="px-6 pb-10 text-center text-sm text-[color:var(--muted)]">
    © {{year}} Felipe Pinzón — Angular · Material · Tailwind
  </footer>
  `,
  styles: [``]
})
export class AppComponent {
  year = new Date().getFullYear();
}
