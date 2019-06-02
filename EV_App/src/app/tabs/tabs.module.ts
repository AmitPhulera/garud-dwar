import { IonicModule } from '@ionic/angular';
import {
  LaunchNavigator
} from '@ionic-native/launch-navigator/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import { TabsPage } from './tabs.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage],
  providers:[Geolocation,BluetoothSerial, LaunchNavigator]
})
export class TabsPageModule {}
