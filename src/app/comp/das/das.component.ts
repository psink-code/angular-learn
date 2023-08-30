import { Component } from '@angular/core';
import { ApiService } from 'src/app/servizzi/api.service';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-das',
  templateUrl: './das.component.html',
  styleUrls: ['./das.component.css'],
})
export class DasComponent {
  showFiller = false;
  private subscription: Subscription;
  rootmap: any;
  menuVar: boolean = true;
  constructor(public api: ApiService, private router: Router) {
    this.rootmap = this.router.url;
    console.log(this.rootmap);

    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rootmap = this.router.url;
      }
    });
  }
  menu() {
    this.menuVar = !this.menuVar;
    console.log(this.menuVar);
  }
  rootrt($route: any) {
    console.log($route);
  }
  ngOnInit(): void {}
}
