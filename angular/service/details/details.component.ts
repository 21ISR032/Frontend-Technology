import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location/housing-location.component';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h4 class="listing-heading"><b>Player name:</b>{{housingLocation?.name}}</h4>
      <p class="listing-location"><b>Player email:</b>{{housingLocation?.email}},<br><B>Player city:</B>{{housingLocation?.city}}, <br><b>Player State:</b>{{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About gamer</h2>
      <ul>
        <li><b>Games won: {{housingLocation?.availableUnits}}</b></li>
      </ul>
    </section>
  </article>
`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

}