import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servizzi/api.service';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css'],
})
export class P3Component {
  piatti: any = [];
  num: number = -1;
  cart: any;
  currentId: number = 0;

  generate() {
    for (let i = 0; i < 100; i++) {
      this.api
        .apiepic(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .subscribe((data: any) => {
          const nuovoPiatto = {
            name: data.meals[0].strMeal,
            id: data.meals[0].idMeal,
            img: data.meals[0].strMealThumb,
            dess: data.meals[0].strInstructions,
            ordini: 1,
            ids: Date.now(),
          };
          if (!this.piatti.some((p: any) => p.id === nuovoPiatto.id)) {
            this.piatti[i] = nuovoPiatto;
          }
        });
    }
    return this.piatti;
  }
  counter() {}
  add(piatto: any) {
    const uniqueId = Date.now();
    this.api.carrello[this.num] = {
      ...piatto,
      ids: uniqueId,
    };
    this.num++;
    console.log(this.api.carrello);
  }
  kik(piatto: any) {
    this.api.carrello = this.api.carrello.filter(
      (data: any) => data.ids != piatto.ids
    );
    console.log(this.api.carrello);
    this.num--;
    return this.api.carrello;
  }
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.cart = this.router.url == '/p3/cart' ? true : false;
    this.generate();
    console.log(this.cart);
  }
}
