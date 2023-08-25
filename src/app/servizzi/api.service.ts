import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  @Output() aClickedEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  apiepic(url: string) {
    return this.http.get(url);
  }
  scritte(e: any) {
    return this.aClickedEvent.emit(e.target.value);
  }
}
