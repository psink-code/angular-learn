import { Component } from '@angular/core';
import { ApiService } from 'src/app/servizzi/api.service';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { P3Component } from '../p3/p3.component';

@Component({
  selector: 'app-das',
  templateUrl: './das.component.html',
  styleUrls: ['./das.component.css'],
})
export class DasComponent {
  showFiller = false;
  private subscription: Subscription;
  rootmap: any;

  constructor(
    public api: ApiService,
    private router: Router
  ) /*     public p3: P3Component
   */ {
    this.rootmap = this.router.url;
    console.log(this.rootmap);

    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rootmap = this.router.url;
      }
    });
  }
  menu() {
    this.api.menuVar = !this.api.menuVar;
    console.log(this.api.menuVar);
  }
  rootrt($route: any) {
    console.log($route);
  }
  ngOnInit(): void {}
}
