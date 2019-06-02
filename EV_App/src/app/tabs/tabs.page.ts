import { BluetoothSerial } from "@ionic-native/bluetooth-serial/ngx";
import { Component } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { bypassSanitizationTrustHtml } from '@angular/core/src/sanitization/bypass';

interface pairedlist {
  class: number;
  id: string;
  address: string;
  name: string;
}

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  currentLat: any;
  currentLong: any;
  err: String;
  pairedList: pairedlist;
  listToggle: boolean = false;
  pairedDeviceID: number = 0;
  dataSend: string = "";
  dataReceived: string = "";
  selectedItem: any;
  logData=[];
  constructor(
    // public loadingController: LoadingController,
    private geolocation: Geolocation,
    private bs: BluetoothSerial,
    // public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    // this.presentToast("consdd");
    // this.presentToast("const");
    console.log("works")
    this.checkBluetoothEnabled();
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }
  checkBluetoothEnabled() {
    this.bs.isEnabled().then(
      success => {
        // this.presentToast("the blue tooth is enabled");
        // this.presentToast("the blue tooth is enabled");
        this.listPairedDevices();
      },
      error => {
        console.log(error);
        this.presentToast("bluetooth enabled error");
        if (this.bs.available) {
          this.bs
            .enable()
            .then(() => {
              this.listPairedDevices();
            })
            .catch(err => {
              this.presentToast("Unable to Start Bluetooth");
            });
        } else {
          this.presentToast("Bluetooth not available");
        }
      }
    );
  }
  parseData(data){
    if(!data){
      console.log("Some data recieved")
      console.log(data);
    }else{
      let [mac,ts,batteryPercent,amp]=data.split(",");
      let dataobj={mac,ts,batteryPercent,amp};
      this.logData.push(dataobj);
    }
  }
  errorParse(data){
    if(!data){
      console.log("Some error")
      
    }else{
      
    }
  }
  //-l -c -s
  connectToDevice(devices) {
    // find BLE_PI
    let connectTo = devices.filter(device=>device.name==="BLE_PI")
    this.bs.connect(connectTo[0].address).subscribe(d=>{
        console.log(d);
      // this.presentToast("bluetooth connected");
      // this.bs.subscribeRawData().subscribe(d=>{console.log(d);this.parseData(d)},this.errorParse);
      this.bs.subscribe('\n').subscribe(d=>{console.log(d);this.parseData(d)},this.parseData);
      // this.bs.read().then(this.parseData).catch(this.parseData);
    }, err => {
      // this.presentToast(err);
    });

    // this.presentToast(JSON.stringify(devices));
    // devices.map(console.log);
  }
  listPairedDevices() {
    this.bs.list().then(
      success => {
        // this.presentToast("listPaireddevices: success")
        // this.presentToast(JSON.stringify(success));
        this.pairedList = success;
        // this.presentToast(JSON.stringify(this.pairedList));
        this.connectToDevice(success);
        this.listToggle = true;
      },
      error => {
        this.presentToast(JSON.stringify(error));
        this.presentToast("Please Enable Bluetooth");
        this.bs.enable();
        this.listToggle = false;
      }
    );
  }

  async showError(error) {
    const alert = await this.alertCtrl.create({
      header: "Alert",
      subHeader: error,
      buttons: ["Dismiss"]
    });
  }
}
