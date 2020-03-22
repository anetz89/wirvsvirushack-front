import { AfterViewInit, Component } from '@angular/core';

import { BackendConnectorService } from '../shared/backend-connector.service';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  public items;
  public map;

  private viewInitialized = false;

  constructor(private backend: BackendConnectorService) {
    this.backend.load().subscribe((items) => {
      this.items = items;
      if (this.viewInitialized) {
        this.initMap();
      }
    });
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    if (this.items) {
      this.initMap();
    }
  }

  private initMap(): void {

    this.map = L.map('map', {
      center: [ 48.14369, 11.54907 ],
      zoom: 5,
      zoomControl: false
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    L.control.zoom({
        position: 'bottomright'
    }).addTo(this.map);

    tiles.addTo(this.map);

    const myIcon = L.divIcon({
      className: 'needhelpLeafletMarker',
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    });

    const latlngBounds = L.latLngBounds(this.items.map((item, index) => {
      const latlng = L.latLng(item.latlng);
      L.marker(latlng, {
        icon: myIcon
      })
      .bindPopup(item.name + '</br>' + item.address + '</br></br><a class="needhelpLeafletButton" href="/shoppinglist/' + index + '">helfen</a>')
      .addTo(this.map);
      return latlng;
    }));
    this.map.fitBounds(latlngBounds);
  }
}
