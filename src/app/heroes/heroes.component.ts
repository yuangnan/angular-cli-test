import { Component } from '@angular/core';
import { Hero } from '../model/hero';
import { OnInit } from '@angular/core';
import {HeroService} from '../service/hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  // templateUrl: './app.component.html',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html',

})


export class HeroComponent implements OnInit {
  constructor(private heroService: HeroService,
  private router: Router) {}
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
