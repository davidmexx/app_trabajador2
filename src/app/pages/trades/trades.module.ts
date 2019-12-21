import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TradesPage } from './trades.page';
import { ModalTradesPage } from 'src/app/modals/modal-trades/modal-trades.page';
import { ModalTradesPageModule } from '../../modals/modal-trades/modal-trades.module';

const routes: Routes = [
  {
    path: '',
    component: TradesPage
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
    ModalTradesPageModule
  ],
  declarations: [TradesPage]
})
export class TradesPageModule {}
