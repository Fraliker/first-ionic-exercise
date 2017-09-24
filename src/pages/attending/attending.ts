import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Event } from "../../models/event";
import { EventsService } from "../../services/events";
import { EventsPage } from "../events/events";
import { EventPage } from '../event/event';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-attending',
  templateUrl: 'attending.html'
})
export class AttendingPage {
  events: Event[];

  constructor(private eventsService: EventsService, private modalCtrl: ModalController, private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.events = this.eventsService.getEventList();
  }

  onViewEvent(event: Event) {
    const modal = this.modalCtrl.create(EventPage, event);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.eventsService.removeEventFromEvents(event);
        this.events = this.eventsService.getEventList();
      }
    });
  }

  removeFromList(event: Event) {
    this.eventsService.removeEventFromEvents(event);
    this.events = this.eventsService.getEventList();
  }

  getBackground() {
    return this.settingsService.isBackgroundChanged() ? 'altEventBackground' : 'eventBackgroud';
  }
}
