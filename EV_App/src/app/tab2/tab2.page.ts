import {
  LaunchNavigator,
  LaunchNavigatorOptions
} from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(
    private geolocation: Geolocation,
    private launchNavigator: LaunchNavigator
    ) {
    this.getLocation();
  }
  latitude: any;
  longitude: any;
  listArr = [
    { name: 'CP', lat: '28.6304', long: '77.2177' },
    { name: 'AIMS', lat: '28.56682', long: '77.20812' }
  ];

  redirectTo(item) {
    console.log('item: ', item);
    this.launchNavigator.navigate([item.lat, item.long], {
      start: [this.latitude, this.longitude],
      app: this.launchNavigator.APP.GOOGLE_MAPS
    });
  }

  redirectToAims() {
    this.launchNavigator.navigate([28.6304, 77.2177], {
      start: [this.latitude, this.longitude],
      app: this.launchNavigator.APP.GOOGLE_MAPS
    });
  }

  redirectToCP() {
    this.launchNavigator.navigate([28.56682, 77.20812], {
      start: [this.latitude, this.longitude],
      app: this.launchNavigator.APP.GOOGLE_MAPS
    });
  }

  getLocation() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        // resp.coords.latitude
        // resp.coords.longitude
      })
      .catch(error => {
        console.log('Error getting location', error);
      });

    let watch = this.geolocation.watchPosition();
    watch.subscribe(data => {
      console.log('data: ', data);
      // data can be a set of coordinates, or an error (if an error occurred).
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
    });
  }
}
