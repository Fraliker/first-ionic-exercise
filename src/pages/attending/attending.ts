import { Component } from '@angular/core';

import { Event } from "../../data/event.interface";
import { EventsService } from "../../services/events";
import { EventsPage } from "../events/events";


@Component({
  selector: 'page-attending',
  templateUrl: 'attending.html'
})
export class AttendingPage {
  events: Event[];

  constructor(private eventsService: EventsService) {
  }

  ionViewWillEnter() {
    this.events = this.eventsService.getEventList();
  }


  // onRemoveFromFavorites(event: Event) {
  //   this.eventsService.removeEventFromFavorites(event);
  //   // this.events = this.eventsService.getFavoriteEvents();
  //   const position = this.events.findIndex((eventEl: Event) => {
  //     return eventEl.id == event.id;
  //   });
  //   this.events.splice(position, 1);
  // }


}
