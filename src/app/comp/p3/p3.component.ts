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
  generate() {
    for (let i = 0; i < 100; i++) {
      this.api
        .apiepic(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .subscribe((data: any) => {
          this.piatti[i] = {
            name: data.meals[0].strMeal,
            id: data.meals[0].idMeal,
            img: data.meals[0].strMealThumb,
            dess: data.meals[0].strInstructions,
            ordini: 1,
          };
        });
    }
    return this.piatti;
  }
  counter() {}
  add(piatto: any) {
    this.num++;
    piatto['idc'] = this.num;
    this.api.carrello[this.num] = piatto;

    console.log(this.api.carrello);
  }
  kik(piatto: any) {
    this.api.carrello = this.api.carrello.filter(
      (data: any) => data.id != piatto.id
    );
    console.log(this.api.carrello);
    return this.api.carrello;
  }
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.cart = this.router.url == '/p3/cart' ? true : false;
    this.generate();
    console.log(this.cart);
  }
}
