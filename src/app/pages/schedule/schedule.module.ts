import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchedulePage } from './schedule.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PlayerPageModule } from '../player/player.module';
import { PlayerPage } from '../player/player.page';

@NgModule({
  entryComponents: [
    PlayerPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    PlayerPageModule,
    RouterModule.forChild([{ path: '', component: SchedulePage }])
  ],
  declarations: [SchedulePage]
})
export class SchedulePageModule {}
