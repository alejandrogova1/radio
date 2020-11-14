import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BigCardComponent } from "./big-card/big-card.component";
import { EpisodeListItemComponent } from "./episode-list-item/episode-list-item.component";
import { FavoriteItemComponent } from "./favorite-item/favorite-item.component";
import { HostItemComponent } from "./host-item/host-item.component";
import { NotificationItemComponent } from "./notification-item/notification-item.component";
import { IonicModule } from "@ionic/angular";
import { MiniPlayerComponent } from "./mini-player/mini-player.component";

@NgModule({
  declarations: [
    BigCardComponent,
    EpisodeListItemComponent,
    FavoriteItemComponent,
    HostItemComponent,
    NotificationItemComponent,
    MiniPlayerComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    BigCardComponent,
    EpisodeListItemComponent,
    FavoriteItemComponent,
    HostItemComponent,
    NotificationItemComponent,
    MiniPlayerComponent
  ]
})
export class ComponentsModule {}
