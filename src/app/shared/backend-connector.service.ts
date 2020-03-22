import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor() { }

  public load() {
    return {
      subscribe(callback) {
        callback([{
          name: 'Marie',
          phoneNumber: '17049662627',
          shoppingItems: ['Apfel', 'Banane', 'geile Karotten']
        }]);
      }
    };
  }
}
