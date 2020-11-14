import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-player',
    templateUrl: './player.page.html',
    styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

    @Input() data: any;


    buttonPlay = false;
    stream: any = null;
    valueVolume = 50;

    constructor( public modalController: ModalController ) { }

    ngOnInit() {
    }

    clickButtonMusic() {
    }

    closeModal() {
        this.modalController.dismiss();
    }

    play() {

        this.buttonPlay = true;

    }

    stop() {

        this.buttonPlay = false;

    }

    volumen(event) {

        this.valueVolume = event.detail.value;
        this.stream.volume = this.valueVolume / 100;

    }
}
