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
        'name': 'Markus',
        'phoneNumber': '345678',
        'shoppingItems': [
            'Apfel',
            'Schokolade'
        ],
        'address': 'woanders, München',
        'latlng': [
            48.34369,
            11.24907
        ]
    }, {
        'name': 'Daniel',
        'phoneNumber': '345678',
        'shoppingItems': [
            'Apfel',
            'Karotte'
        ],
        'address': 'Arnulfstraße 60, München',
        'latlng': [
            48.14369,
            11.54907
        ]
    }]];
  }

}
