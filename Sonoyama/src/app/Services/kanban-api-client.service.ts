import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanbanApiClientService {
  constructor(private readonly httpClient: HttpClient) {

  }

  getSelections(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/selections');
  }
  createSelection(): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/selections', {});
  }
  createTodo(): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/todos', {});
  }
}
