import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.page.html',
	styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

	constructor( private modalController: ModalController ) { }

	ngOnInit() {
	}

	closeModal() {
		this.modalController.dismiss();
	}

}
