import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor(private http: HttpClient) { }

  public load() {
    return this.http.get('/download').pipe(
      map(
        (res: any) => {
          console.log(res);
          return res;
        }
      ),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    return [[{
      name: 'Dummy1',
      phoneNumber: '123456789',
      address: 'test',
      shoppingItems: ['Apfel', 'Banane']
    }, {
      name: 'Dummy2',
      phoneNumber: '123456789',
      address: 'test',
      shoppingItems: ['Apfel', 'Karotte']
    }]];
  }

}
