import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/servizzi/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css'],
})
export class P2Component implements AfterViewInit {
  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private location: Location
  ) {}
  ngAfterViewInit(): void {
    this.idc = this.route.snapshot.paramMap.get('cat');
  }

  cats: any;
  catcard: any;
  isCard!: boolean;
  idc: any;
  img: any = false;

  save(cat: any) {
    this.catcard = cat;
    this.location.replaceState(`/p2/${this.catcard.id}`);
    console.log(this.catcard);
  }
  clear() {
    this.catcard = false;
    this.location.replaceState(`/p2/`);
  }

  ngOnInit(): void {
    this.idc = this.route.snapshot.paramMap.get('cat');

    this.isCard = !this.route.snapshot.paramMap.get('cat') ? false : true;
    this.api
      .apiepic(`https://api.thecatapi.com/v1/images/search?limit=10`)
      .subscribe((data) => {
        this.cats = data;
      });
  }
}
