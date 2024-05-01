import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
  <main>
    <!-- <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a> -->

    <section class="content">
    <a href="http://127.0.0.1:5502/miniproject/ex8.html" class="white-link">
    Rock Paper Scissor
</a>
      <router-outlet></router-outlet>
    </section>
  </main>
`,
styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'service';
}
