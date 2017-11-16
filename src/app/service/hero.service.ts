import {Injectable} from '@angular/core';
import {Hero} from '../model/hero';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()
export class HeroService {
  private heroesUrl = 'http://127.0.0.1:8080/hero/';  // URL to web api
  private headers = new Headers({'Connect-Type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Origin': '*'});
  constructor(private http: Http) {}
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // 承诺一定返回
  getHeroes(): Promise<Hero[]> {
    return this.http.post( `${this.heroesUrl}getHeroes`, null)
      .toPromise().then(response => response.json() as Hero[])
      .catch(this.handleError);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    // return Promise.resolve(HEROES[id]);
    const url = `${this.heroesUrl}getHero?id=${id}`;
    return this.http.get(url)
    .toPromise().then(response => response.json() as Hero)
    .catch(this.handleError);
  }

  update(hero: Hero): Promise<String> {
    const url = `${this.heroesUrl}saveHero`;
    return this.http.post(url, JSON.stringify(hero))
    // return this.http.post(url, JSON.stringify(hero))
    .toPromise().then(result => result.text() as String)
    .catch(this.handleError);
  }
}
