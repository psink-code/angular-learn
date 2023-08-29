import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servizzi/api.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css'],
})
export class P1Component {
  pokem: any;
  pokemfil: any;
  img: any;
  isCard!: boolean;
  id!: any;
  singlep: any;

  constructor(public api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.isCard = !this.route.snapshot.paramMap.get('id') ? false : true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.api
      .apiepic(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .subscribe((data) => {
        this.singlep = data;
        console.log(this.singlep);
      });
    this.api
      .apiepic('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((data) => {
        console.log(data);
        this.pokem = data;
        this.pokem = this.pokem.results.map((data: any, index: number) => {
          return {
            idc: index + 1,
            name: data.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
              index + 1
            }.png`,
          };
        });
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
