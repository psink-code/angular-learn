import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servizzi/api.service';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css'],
})
export class P2Component {
  constructor(public api: ApiService, private route: ActivatedRoute) {}
  cats: any;
  singlep: any;
  isCard!: boolean;
  idc: any;
  img: any = false;

  save(data: any) {
    this.img = true;
    return (this.img = data.filter((data: any) => data.id == this.idc));
  }

  ngOnInit(): void {
    this.idc = this.route.snapshot.paramMap.get('cat');
    this.isCard = !this.route.snapshot.paramMap.get('cat') ? false : true;

    this.api
      .apiepic(`https://api.thecatapi.com/v1/images/search?limit=10`)
      .subscribe((data) => {
        return (this.cats = data);
      });
  }
}
