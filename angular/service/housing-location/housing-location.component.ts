import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterLink, RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
`,
  styleUrls: ['./housing-location.component.css'] // Corrected key
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

export interface HousingLocation {
  id: number;
  name: string;
  email: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
}
