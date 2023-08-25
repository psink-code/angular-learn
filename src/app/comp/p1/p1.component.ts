import { Component } from '@angular/core';
import { ApiService } from 'src/app/servizzi/api.service';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css'],
})
export class P1Component {
  pokem: any;
  pokemfil: any;
  img: any;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api
      .apiepic('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((data) => {
        this.pokem = data;

        this.pokem = this.pokem.results.map((data: any, index: number) => {
          return {
            name: data.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        console.log(this.pokem);
        this.pokemfil = this.pokem;
      });
    this.api.aClickedEvent.subscribe((data: string) => {
      this.pokem = this.pokemfil;
      this.pokem = this.pokem.filter((poke: any) => {
        return poke.name.includes(data);
      });
    });
  }
}
