import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowDetailPage } from './show-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HostProfilePage } from '../host-profile/host-profile.page';
import { HostProfilePageModule } from '../host-profile/host-profile.module';

const routes: Routes = [
  {
    path: '',
    component: ShowDetailPage
  }
];

@NgModule({
  entryComponents: [
    HostProfilePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HostProfilePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowDetailPage]
})
export class ShowDetailPageModule {}
