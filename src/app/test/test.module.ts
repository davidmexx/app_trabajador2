import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestPage } from './test.page';
import { ModalTradesPage } from '../modals/modal-trades/modal-trades.page';
import { ModalTradesPageModule } from '../modals/modal-trades/modal-trades.module';

const routes: Routes = [
  {
    path: '',
    component: TestPage
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
  declarations: [TestPage]
})
export class TestPageModule {}
