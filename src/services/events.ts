import { Event } from "../data/event.interface";

export class EventsService {

  private savedEvents: Event[] = [];

  addEventToList(event: Event) {
    this.savedEvents.push(event);
    console.log(this.savedEvents);
  }

  removeEventFromEvents(event: Event) {
    const position = this.savedEvents.findIndex((eventEl: Event) => {
      return eventEl.id == event.id;
    });
    this.savedEvents.splice(position, 1);
  }

  getEventList() {
    return this.savedEvents.slice();
  }

  isGoing(event: Event) {
    return this.savedEvents.find((eventEL: Event) => {
      return eventEL.id == event.id;
    });
  }
}
