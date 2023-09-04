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
  num: number = 0;
  cart: any;
  lung: any = 0;
  generate() {
    for (let i = 0; i < 50; i++) {
      this.api
        .apiepic(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .subscribe((data: any) => {
          let nuovoPiatto;
          if (!data) {
            nuovoPiatto = {
              name: 'error',
              id: 'error',
              img: 'error',
              dess: 'error',
              ordini: 0,
              ids: Date.now(),
            };
          } else {
            nuovoPiatto = {
              name: data.meals[0].strMeal,
              id: data.meals[0].idMeal,
              img: data.meals[0].strMealThumb,
              dess: data.meals[0].strInstructions,
              prezzo: Math.floor(Math.random() * 100) + 1,
              ordini: 1,
              ids: Date.now(),
            };
          }
          /* */
          this.piatti[i] = nuovoPiatto;
        });
    }
    return this.piatti;
  }
  plus(piatto: any) {
    piatto.ordini++;
    this.api.sum = this.api.sum + piatto.prezzo;
    this.api.numordini++;
  }
  less(piatto: any) {
    this.api.numordini--;
    this.api.sum = this.api.sum - piatto.prezzo;

    piatto.ordini--;
    if (piatto.ordini == 0) {
      this.kik(piatto);
    }
  }

  add(piatto: any) {
    const uniqueId = Date.now();
    this.num++;

    this.api.sum = this.api.sum + piatto.prezzo;

    this.api.numordini = this.num;

    if (this.api.carrello.some((p: any) => p.id === piatto.id)) {
      this.api.carrello.map((data: any) => {
        if (data.id == piatto.id) {
          data.ordini++;
        }
      });
    } else {
      console.log(this.lung);

      this.api.carrello[this.lung] = {
        ...piatto,
        ids: uniqueId,
      };
      this.lung++;
    }
    console.log(this.api.carrello);
  }
  kik(piatto: any) {
    let ordini1 = Number(this.api.numordini) - Number(piatto.ordini);

    this.api.carrello = this.api.carrello.filter(
      (data: any) => data.ids != piatto.ids
    );
    this.api.numordini = ordini1;
    this.num--;
    return this.api.carrello;
  }
  inviOrdine() {}
  constructor(public api: ApiService, private router: Router) {
    this.cart = this.router.url == '/p3/cart' ? true : false;
  }
  ngOnInit(): void {
    this.generate();
    console.log(this.cart);
    this.api.aClickedEvent.subscribe(() => {
      this.generate();
    });
  }
}
