import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Windstorm', superpower: 'laser vision' },
      { id: 2, name: 'Breyana Ray', superpower: 'evil' },
      { id: 3, name: 'James Stapleton, PhD.', superpower: 'flight' },
      { id: 4, name: 'Stacy Dohogne Lane', superpower: 'evil' },
      { id: 5, name: 'Chris Carnell', superpower: 'invisibility' },
      { id: 6, name: 'Brian Rhodes', superpower: 'evil' },
      { id: 7, name: 'Alan Long', superpower: 'strength' },
      { id: 8, name: 'Lee Hodges', superpower: 'evil' },
      { id: 9, name: 'Zach Young', superpower: 'speed' },
      { id: 10, name: 'Hayley Hutson', superpower: 'evil' },
      { id: 11, name: 'Leah Harris', superpower: 'telepathy' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
