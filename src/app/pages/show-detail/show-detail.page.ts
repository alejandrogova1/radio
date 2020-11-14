import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { HostProfilePage } from "../host-profile/host-profile.page";

@Component({
  selector: "app-show-detail",
  templateUrl: "./show-detail.page.html",
  styleUrls: ["./show-detail.page.scss"]
})
export class ShowDetailPage implements OnInit {
  item = null;

  constructor(
    public actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ionViewWillEnter() {
    const itemId = +this.route.snapshot.paramMap.get("id");
    this.item = this.dataService.getShowsById(itemId);
  }

  async hostModal(id: number) {
    const modal = await this.modalController.create({
      component: HostProfilePage,
      cssClass: "modal-container",
      componentProps: {
        host: this.dataService.getHostsById(id)
      }
    });
    return await modal.present();
  }

  startAudio(){
    console.log(this.item['image']);
  }

  ngOnInit() {
  }
}
