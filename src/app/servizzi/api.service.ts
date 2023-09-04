import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  @Output() aClickedEvent = new EventEmitter<string>();
  menuVar: boolean = false;
  carrello: any = [];
  numordini: number = 0;
  sum: number = 0;

  constructor(private http: HttpClient) {}

  apiepic(url: string) {
    let ciao = this.http.get(url);

    return ciao;
  }
  scritte(e: any) {
    return this.aClickedEvent.emit(e.target.value);
  }
  public ciao(e: any) {
    console.log(e);
  }
}
