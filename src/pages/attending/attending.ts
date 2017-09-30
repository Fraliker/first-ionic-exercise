import { Component } from '@angular/core';
import { ModalController, PopoverController, AlertController } from 'ionic-angular';
import { Event } from "../../models/event";
import { EventsService } from "../../services/events";
import { EventsPage } from "../events/events";
import { EventPage } from '../event/event';
import { SettingsService } from '../../services/settings';
import { EventOptionsPage } from '../../pages/attending/event-options/event-options';
import { AuthService } from '../../services/auth';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-attending',
  templateUrl: 'attending.html'
})
export class AttendingPage {
  events: Event[];

  constructor(private eventsService: EventsService, private modalCtrl: ModalController, private settingsService: SettingsService,
  private popoverCtrl: PopoverController,
private authService: AuthService,
private loadingCtrl: LoadingController,
private alertCtrl: AlertController) {
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

  onShowOptions(event: MouseEvent) {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    const popover = this.popoverCtrl.create(EventOptionsPage);
    popover.present({ev: event});
    popover.onDidDismiss(
      data => {
        if (!data) {
          return;
        }
        if (data.action == 'load') {
          loading.present();
          this.authService.getActiveUser().getToken().then(
            (token: string) => {
              this.eventsService.fetchList(token)
              .subscribe(
                (list: Event[]) => {
                  loading.dismiss();
                  if(list) {
                    this.events = list;
                  } else {
                    this.events = [];
                  }
                },
                error => {
                  loading.dismiss();
                  this.handleError(error.json().error);
                }
              );
            }
          );
        } else if (data.action == 'store') {
          loading.present();
          this.authService.getActiveUser().getToken().then(
            (token: string) => {
              this.eventsService.storeList(token)
              .subscribe(
                () => loading.dismiss(),
                error => {
                  loading.dismiss();
                  this.handleError(error.json().error);
                }
              );
            }
          );
        }
      }
    );
  }

  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      title: 'An error occured',
      message: errorMessage,
      buttons: ['Ok']
    });
    alert.present();
  }

}
