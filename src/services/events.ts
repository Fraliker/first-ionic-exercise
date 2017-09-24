import { Event } from "../models/event";

export class EventsService {

  private events = [
    {
      id:'1',
      name: 'Pastry Workshop for Beginners',
      time: 'Sunday, Nov. 19, 2017 at 7:30 p.m. ',
      pic: 'assets/img/cooking.png'
    },
    {
      id:'2',
      name: 'Violin in Town',
      time: 'Wednesday, Nov. 22, 2017 at 7:30 p.m.',
      pic: 'assets/img/violin.png'
    },
    {
      id:'3',
      name: 'Country Music Festival',
      time: 'Saturday, December 16, 2017 at 2 p.m. & 7:30 p.m.',
      pic: 'assets/img/concert.png'
    },
    {
      id:'4',
      name: 'Reading Club',
      time: 'Sunday, Jan. 21, 2018 at 7:30 p.m. ',
      pic: 'assets/img/reading.png'
    }
  ];

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

  getAllEvents() {
    return this.events.slice();
  }

  getEventList() {
    return this.savedEvents.slice();
  }

  isGoing(event: Event) {
    return this.savedEvents.find((eventEL: Event) => {
      return eventEL.id == event.id;
    });
  }

  // addEvent(event: Event)
  addEvent(id: string, name: string, time: string, pic: string) {
    this.events.push(new Event(id, name, time, pic));
  }


}
