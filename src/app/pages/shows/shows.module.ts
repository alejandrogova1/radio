import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowsPage } from './shows.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PlayerPage } from '../player/player.page';
import { PlayerPageModule } from '../player/player.module';
import { NotificationsPage } from '../notifications/notifications.page';
import { NotificationsPageModule } from '../notifications/notifications.module';

@NgModule({
  entryComponents: [
    PlayerPage,
    NotificationsPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    PlayerPageModule,
    NotificationsPageModule,
    RouterModule.forChild([{ path: '', component: ShowsPage }])
  ],
  declarations: [ShowsPage]
})
export class ShowsPageModule {}
