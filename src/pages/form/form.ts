import { Component, OnInit } from '@angular/core';
import { NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage implements OnInit {
  mode = 'New';
  eventForm: FormGroup;
  selectOptions = ['Weekday Morning', 'Weekday Afternoon', 'Weekend Morning', 'Weekend Afternoon'];

  constructor (private navParams: NavParams, private actionSheetController: ActionSheetController,
  private alertCtrl: AlertController,
private toastCtrl: ToastController) {}

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    this.initializeForm()
  }

  private initializeForm() {
    this.eventForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'time': new FormControl('Weekend Morning', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.eventForm);
  }

  onManageEvent() {
    const actionSheet = this.actionSheetController.create({
      title: 'What would you like to do?',
      buttons: [
        {
          text: 'Add Event',
          handler: () => {
            // this.createNewEventAlert().present();
            const toast = this.toastCtrl.create({
              message: 'Please click Add New Event button to add a new event!',
              duration: 2000,
              position: 'bottom'
            });
            toast.present();
          }
        },
        {
          text: 'Remove Event',
          role: 'destructive',
          handler:() => {
            const toast = this.toastCtrl.create({
              message: 'Simply click Back in the header to cancel adding an event.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  private createNewEventAlert() {
    const newEventAlert = this.alertCtrl.create({
      title: 'Add Event',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            if (data.name.trim() == '' || data.name == null ) {
              const toast = this.toastCtrl.create({
                message: 'Please enter a valid value!',
                duration: 1000,
                position: 'bottom'
              });
              toast.present();
            }
          }
        }
      ]
    });
  }
}
