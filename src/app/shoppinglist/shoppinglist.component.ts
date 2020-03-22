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

    this.backend.load().subscribe((res) => {
      if (res.length < id) {
        this.error = 'problem beim laden der Liste';
        return;
      }
      this.name = res[id].name;
      this.items = res[id].shoppingItems;
      this.phonenumber = res[id].phoneNumber;
    });
  }

  ngOnInit() {
  }

}
