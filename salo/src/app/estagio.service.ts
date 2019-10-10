import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstagioService {
  estagiosUrl = '';
  constructor() { private http: HttpClient }
  listar(){

  }
}
