import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {} from "../profile/profile.module"

import { IonicModule } from "@ionic/angular";

import { UserPage } from "./user.page";
import { ComponentsModule } from "src/app/components/components.module";
import { fromEventPattern } from 'rxjs';

const routes: Routes = [
  {
    path: "",
    component: UserPage,
    children: [
      {
       path: 'jobs',
       loadChildren: '../projects/projects.module#ProjectsPageModule' 
      },
      {
        path: 'user',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
      {
        path: 'detail',
        loadChildren: '../detail-project/detail-project.module#DetailProjectPageModule'
      },
      {
        path: 'hour',
        loadChildren: '../hours/hours.module#HoursPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //RouterModule.forChild(routes),
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [UserPage]
})
export class UserPageModule {}
