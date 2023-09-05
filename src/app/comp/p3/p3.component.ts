import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servizzi/api.service';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css'],
})
export class P3Component {
  num: number = 0;
  cart: any;
  lung: any = 0;
  momento: string = 'ricevuto';
  plus(piatto: any) {
    const isFound = this.api.carrello.some((element: any) => {
      if (element.id === piatto.id) {
        return true;
      }

      return false;
    });
    if (!isFound) {
      this.add(piatto);
    } else {
      this.api.carrello.map((p: any) => {
        if (piatto.id == p.id) {
          p.ordini++;
        }
      });
      this.num++;
      piatto.ordini++;
      this.api.sum = this.api.sum + piatto.prezzo;
      this.api.numordini++;
    }
  }
  less(piatto: any) {
    this.num++;
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
    piatto.ordini++;
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
  ordina() {
    this.api.cronos[this.api.numC] = this.api.carrello;
    this.api.cronos[this.api.numC]['tot'] = this.api.sum;
    this.api.numC++;
    this.api.carrello = [];
    this.api.numordini = 0;
    this.api.sum = 0;
    this.api.piatti.map((data: any) => {
      data.ordini = 0;
    });
  }
  preparazione(lista: any) {
    lista.map((data1: any) => {
      data1.map((data2: any) => {
        if (!data2.stato) {
          data2['stato'] = this.momento;
        }
      });
      setInterval(() => {
        let i: number = Math.round(Math.random() * Number(data1.length));
        console.log(i);
        if (data1[i].stato == 'consegniato') {
          i--;
        } else if (data1[i].stato == 'preparazione in corso') {
          data1[i].stato = 'consegniato';
        } else {
          data1[i].stato = 'preparazione in corso';
        }
      }, 3000);
    });
  }

  inviOrdine() {}
  constructor(public api: ApiService, private router: Router) {
    this.cart = this.router.url == '/p3/cart' ? true : false;
    /*     this.generate();
     */
  }
  ngOnInit(): void {
    this.api.aClickedEvent.subscribe(() => {
      this.api.piatti = this.api.generate();
    });
  }
}
