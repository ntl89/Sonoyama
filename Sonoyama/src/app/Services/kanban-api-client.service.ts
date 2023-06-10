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
  createSelection(selection: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/selections', selection);
  }
  createTodo(id: number, todoitem: any): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:3000/selections/${id}/todos`, todoitem);
  }
  updateSelection(id: number, selection: any): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:3000/selections/${id}`, selection);
  }
}
