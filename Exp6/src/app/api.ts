import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  async getItems(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return data;
  }
}