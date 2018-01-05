import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { log } from 'util';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    console.log('#yolo');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
