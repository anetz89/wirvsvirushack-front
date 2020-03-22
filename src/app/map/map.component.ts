import { Component, OnInit } from '@angular/core';

import { BackendConnectorService } from '../shared/backend-connector.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public items;

  constructor(private backend: BackendConnectorService) {
    this.backend.load().subscribe((items) => {
      this.items = items;
    });
  }

  ngOnInit() {
  }

}
