import { Component, OnInit } from '@angular/core';
import { AlertController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import events from '../../data/events';

import { Event } from "../../data/event.interface";
import { EventsService } from "../../services/events";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage implements OnInit {
  eventCollection: {id:string, name: string, time: string, pic: string}[];
  eventGroup: {id:string, name: string, time: string, pic: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private eventsService: EventsService) {}

  ngOnInit() {
    // this.eventCollection = events;
    this.eventCollection = this.eventsService.getAllEvents();
    // this.eventCollection = this.eventsService.events;
    // this.eventGroup = this.navParams.data;
  }

  onJoinEvent(selectedEvent: Event) {
    const alert = this.alertCtrl.create({
      title: 'Are you sure you want to go to this event?',
      buttons: [
        {
          text: 'Yes, I am going!',
          handler: () => {
            this.eventsService.addEventToList(selectedEvent);
          }
        },
        {
          text: 'No, I changed my mind.',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromEventList(event: Event){
    return this.eventsService.removeEventFromEvents(event);
  }

  isGoing(event: Event) {
    return this.eventsService.isGoing(event);
  }
}
