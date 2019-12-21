import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalTradesPage } from 'src/app/modals/modal-trades/modal-trades.page';
import { ModalTradesPageModule } from '../../modals/modal-trades/modal-trades.module';
import { StarRatingModule } from 'ionic4-star-rating';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  entryComponents: [
    ModalTradesPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    StarRatingModule,
    ModalTradesPageModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
