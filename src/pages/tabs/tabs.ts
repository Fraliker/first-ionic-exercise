import { Component } from '@angular/core';

import { AttendingPage } from '../attending/attending';
import { EventsPage } from '../events/events';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AttendingPage;
  tab3Root = EventsPage;

  constructor() {

  }
}
