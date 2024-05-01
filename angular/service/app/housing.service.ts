import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location/housing-location.component';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // Define class properties at the top of the class
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Jessy',
      email: 'jessy@gmail.com',
      city: 'Agra',
      state: 'DELHI',
      photo: '/assets/img/p15.jpg',
      availableUnits: 4,
    },
    {
      id: 1,
      name: 'Henry',
      email: 'henry@gmail.com',
      city: 'Chennai',
      state: 'TAMILNADU',
      photo: '/assets/img/p5.jpeg',
      availableUnits: 16,
    },
    {
      id: 2,
      name: 'Monisha',
      email: 'monisha@gmail.com',
      city: 'Vellore',
      state: 'TAMILNADU',
      photo: '/assets/img/p1.jpg',
      availableUnits: 13,
    },
    {
      id: 3,
      name: 'Fahad',
      email: 'fahad@gmail.com',
      city: 'Valapula',
      state: 'KERALA',
      photo: '/assets/img/p2.avif',
      availableUnits: 20,
    },
    {
      id: 4,
      name: 'Mary',
      email: 'mary@gmail.com',
      city: 'Telengana',
      state: 'TELANGANA',
      photo: '/assets/img/p3.avif',
      availableUnits: 10,
    
    },
    {
      id: 5,
      name: 'Jonita',
      email: 'jonita@gmail.com',
      city: 'Erode',
      state: 'TAMILNADU',
      photo: '/assets/img/p17.jpg',
      availableUnits: 25,
     
    },
    {
      id: 6,
      name: 'Sarath',
      email: 'sarath@gmail.com',
      city: 'Tanjaore',
      state: 'TAMILNADU',
      photo: '/assets/img/p7.jpg',
      availableUnits: 53,
    },
    {
      id: 7,
      name: 'Gandhi',
      email: 'gandhi@gmail.com',
      city: 'Theni',
      state: 'TAMILNADU',
      photo: '/assets/img/p9.jpg',
      availableUnits: 2,
      
    },
    {
      id: 8,
      name: 'Smith',
      email: 'smith@gmail.com',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/img/p11.jpg',
      availableUnits: 10,
    },
    {
      id: 9,
      name: 'Farina',
      email: 'farina@gmail.com',
      city: 'Portland',
      state: 'OR',
      photo: '/assets/img/p12.jpg',
      availableUnits: 46,
    },
  ];

  // Constructor should be placed after properties and methods
  constructor() {}

  // Method to get all housing locations
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  // Method to get a housing location by its ID
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}
