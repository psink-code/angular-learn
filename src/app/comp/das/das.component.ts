import { Component } from '@angular/core';
import { ApiService } from 'src/app/servizzi/api.service';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-das',
  templateUrl: './das.component.html',
  styleUrls: ['./das.component.css'],
})
export class DasComponent {
  constructor(public api: ApiService, private router: Router) {
    this.rootmap = this.router.url;
  }

  showFiller = false;

  rootmap: any;
  rootrt($route: any) {
    console.log($route);
  }
  ngOnInit(): void {}
}
