import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  @Output() aClickedEvent = new EventEmitter<string>();
  menuVar: boolean = false;
  carrello: any = [];
  numordini: number = 0;
  sum: number = 0;
  numC: number = 0;
  piatti: any = this.generate();
  cronos: any = [];

  constructor(private http: HttpClient) {}

  apiepic(url: string) {
    let ciao = this.http.get(url);

    return ciao;
  }
  scritte(e: any) {
    return this.aClickedEvent.emit(e.target.value);
  }
  public ciao(e: any) {
    console.log(e);
  }
  generate() {
    let piatti: any = [];

    for (let i = 0; i < 100; i++) {
      this.apiepic(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      ).subscribe((data: any) => {
        let nuovoPiatto;

        nuovoPiatto = {
          name: data.meals[0].strMeal,
          id: data.meals[0].idMeal,
          img: data.meals[0].strMealThumb,
          dess: data.meals[0].strInstructions,
          prezzo: Math.floor(Math.random() * 100) + 1,
          ordini: 0,
          ids: Date.now(),
        };

        piatti[i] = nuovoPiatto;
      });
    }
    return piatti;
  }
}
