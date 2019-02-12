import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  uri = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.uri}`);
  }
}
