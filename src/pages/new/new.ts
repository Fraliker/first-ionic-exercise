import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EventsService } from '../../services/events';
import { NavController } from 'ionic-angular';
import { FormPage } from '../form/form';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})

export class NewPage {

  onAddEvent(form: NgForm) {
    // console.log(form);
    var id = this.eventsService.getAllEvents().length + 1;
    this.eventsService.addEvent(id.toString(),form.value.eventName, form.value.eventTime,'assets/img/cover.png');
    console.log(this.eventsService.getAllEvents());
    form.reset();
  }

  constructor(private eventsService: EventsService,
              private navCtrl: NavController){}

  onNewEvent() {
    this.navCtrl.push(FormPage, {mode: 'New'});
  }


}
