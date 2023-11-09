import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuotableService {
  private apiUrl = 'https://api.quotable.io';

  constructor(private http: HttpClient) {}

  getRandomQuote() {
    return this.http.get(`${this.apiUrl}/random`);
  }

  searchQuotes(query: string) {
    return this.http.get(`${this.apiUrl}/search?q=${query}`);
  }
}
