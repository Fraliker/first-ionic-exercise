import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  name: string;
  time: string;
  pic: string;

  constructor (private viewCtrl: ViewController, private navParams: NavParams) {}
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('name');
    this.time = this.navParams.get('time');
    this.pic = this.navParams.get('pic');
  }
}
