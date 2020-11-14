import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController } from '@ionic/angular';
import { PlayerPage } from '../player/player.page';
import { Router } from '@angular/router';
import { NotificationsPage } from '../notifications/notifications.page';

@Component({
    selector: 'app-shows',
    templateUrl: 'shows.page.html',
    styleUrls: ['shows.page.scss']
})
export class ShowsPage implements OnInit {

    shows: any;

    upcomingConf = {
        spaceBetween: 20,
        slidesPerView: 2,
        scrollbar: true
    };

    onTheAir =
        {
            hour: '2PM - 3PM',
            photo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            title: 'FM City Vibes Ep. 26',
            text: 'Host by John Smith & Jane Martinez'
        };

    constructor(private dataService: DataService,
                private router: Router,
                public modalController: ModalController) { }

    ngOnInit() {
        this.getShows();
    }

    getShows() {
        this.shows = this.dataService.getShows();
    }

    async presentModal(info: any) {
        const modal = await this.modalController.create({
            component: PlayerPage,
            componentProps: { data: info }
        });
        return await modal.present();
    }

    async goToNotifications() {
        const modal = await this.modalController.create({
            component: NotificationsPage
        });

        return await modal.present();
    }
}
