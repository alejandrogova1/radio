import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlayerPage } from 'src/app/pages/player/player.page';

@Component({
  selector: 'app-mini-player',
  templateUrl: './mini-player.component.html',
  styleUrls: ['./mini-player.component.scss'],
})
export class MiniPlayerComponent implements OnInit {

  flagPlay = true;

  @Input() photo : string;
  title = "";
  text = "";
  
  constructor( public modalController: ModalController ) { }

  ngOnInit() {  }

  async presentModal(info: any) {
    const modal = await this.modalController.create({
        component: PlayerPage,
        componentProps: { data: info }
    });
    return await modal.present();
  }

  toggleIconPlay() {
    this.flagPlay = !this.flagPlay;
    console.log(this.flagPlay);
  }

}
