import { Event } from "../data/event.interface";

export class EventsService {
  private savedEvents: Event[] = [];

  addEventToList(event: Event) {
    this.savedEvents.push(event);
    console.log(this.savedEvents);

  }

  // removeQuoteFromFavorites(quote: Quote) {
  //   const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
  //     return quoteEl.id == quote.id;
  //   });
  //   this.favoriteQuotes.splice(position, 1);
  // }
  //
  getEventList() {
    return this.savedEvents.slice();
  }
  //
  // isQuoteFavorite(quote: Quote) {
  //   return this.favoriteQuotes.find((quoteEl: Quote) => {
  //     return quoteEl.id == quote.id;
  //   });
  // }
}
