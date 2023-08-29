import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/servizzi/api.service';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css'],
})
export class P2Component implements AfterViewInit {
  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.idc = this.route.snapshot.paramMap.get('cat');
  }

  cats: any;
  singlep: any;
  isCard!: boolean;
  idc: any;
  ciao = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      console.log('Returns value');
      observer.next('1000');
    }, 5000);
  });
  img: any = false;

  save(cat: any) {
    setTimeout(() => {
      console.log(cat);

      this.img = cat;
      console.log(this.img);
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnInit(): void {
    this.idc = this.route.snapshot.paramMap.get('cat');
    console.log(this.idc);

    this.isCard = !this.route.snapshot.paramMap.get('cat') ? false : true;
    this.api
      .apiepic(`https://api.thecatapi.com/v1/images/search?limit=10`)
      .subscribe((data) => {
        this.cats = data;
      });
  }
}
