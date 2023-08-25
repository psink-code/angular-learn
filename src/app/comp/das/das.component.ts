import { Component } from '@angular/core';
import { ApiService } from 'src/app/servizzi/api.service';

@Component({
  selector: 'app-das',
  templateUrl: './das.component.html',
  styleUrls: ['./das.component.css'],
})
export class DasComponent {
  constructor(public api: ApiService) {}

  showFiller = false;
}
