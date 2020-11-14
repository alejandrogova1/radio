import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavoritesPage } from './favorites.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PlayerPageModule } from '../player/player.module';
import { PlayerPage } from '../player/player.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage
  }
];

@NgModule({
  entryComponents: [
    PlayerPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PlayerPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
