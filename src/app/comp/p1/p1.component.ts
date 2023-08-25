import { Component } from '@angular/core';
import { ApiService } from 'src/app/servizzi/api.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css'],
})
export class P1Component {
  games: any;
  img: any;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api
      .apiepic('https://pokeapi.co/api/v2/pokemon?offset=20&limit=100')
      .subscribe((data) => {
        this.games = data;
        this.games = this.games.results.map((data: any, index: number) => {
          return {
            name: data.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        console.log(this.games);
      });
  }
}
