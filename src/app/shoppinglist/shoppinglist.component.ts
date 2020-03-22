import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BackendConnectorService } from '../shared/backend-connector.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  public items = [];
  public name = '';
  public phonenumber = '';
  public error = '';

  constructor(private route: ActivatedRoute,
              private backend: BackendConnectorService) {

    const id = this.route.snapshot.paramMap.get('id');

    this.backend.load().subscribe((items) => {
      if (items.length < id) {
        this.error = 'problem beim laden der Liste';
        return;
      }
      this.name = items[id].name;
      this.items = items[id].shoppingItems;
      this.phonenumber = items[id].phoneNumber;
    });
  }

  ngOnInit() {
  }

}
