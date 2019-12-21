import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DetailProject, Data } from '../../interfaces/detail-project';
import { TestingService } from '../../services/testing.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.page.html',
  styleUrls: ['./detail-project.page.scss'],
})
export class DetailProjectPage  {

  constructor(private storage: Storage, private services: TestingService,  public loadingController: LoadingController, private route: Router, private callNumber: CallNumber, private launchNavigator: LaunchNavigator) { }
  id: string;
  idUser: number;
  token: string;
  project: Data[] = [];
  days: any = [];
  dias: string;
  first_name: string;
  last_name: string;
  profile_image: string;
  rating: number;
  idContractor: string;
  va = 0;
  enabled:string;
  async ionViewWillEnter	() {
    this.days = [];
    await this.storage.get("detail").then(res =>{
      this.id =  res.id;
      this.enabled = res.enabled;
      console.log("detal ud ", res)
    })
    await this.getToken();
    await this.detailProject(this.id, this.token);
  }
  async detailProject(id, token){ 
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    this.project = [];
    await this.services.detailProject(id, token).subscribe(res =>{
      this.project.push(res.data);
      this.first_name = res.data.project.user.first_name;
      this.last_name = res.data.project.user.last_name;
      this.profile_image =  `https://api.haskyconnections.com/uploads/${res.data.project.user.profile_image}`;
      this.idContractor =  res.data.project.user_id;
      this.rating =  res.data.project.user.rating;
      if(res.data.project.user.rating == null){
        this.va = 0;
      }else{
        this.va = res.data.project.user.rating;
      }
      this.separator(res.data.weekdays);
      console.log(res)
      loading.dismiss();
    }, erro=>{
      console.log("hay un error");
     // this.route.navigate(["user/jobs"]);
      loading.dismiss();
    })
    console.log("este es", this.project);
    console.log("dias ", this.days);
  }

  async getToken(){
    await this.storage.get("token").then(res =>{
      this.idUser = res.user;
      this.token = res.token;
     // this.detailProject("45", res.token);
    })
  }
  async presentLoading(loading) {
    return await loading.present();
  }
  separator(string) {
    //elimina el ultimo |
    let res = string.split("|");
    res.length = res.length - 1;
    this.dias = res;
    this.days.push(...res);
   // console.log(this.days);
  }
  async ionViewDidLeave(){
    await this.storage.remove("detail");
  }
  async acceptjob(){
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    let data = {
      user_id: this.idUser,
      request_id: this.id,
      contractor_id: this.idContractor
    };
    this.services.acceptedJobs(data, this.token).subscribe(res =>{
      if(res.type == "success"){
          loading.dismiss();
          this.route.navigate(["user/jobs"]);
      }
    }, erro =>{
      loading.dismiss();
    })
  }
  callContractor(tel){
  this.callNumber.callNumber(`${tel}`, true);
   // console.log(tel)
  }
  openAddress(address){
    
  let options: LaunchNavigatorOptions = {
    app: this.launchNavigator.APP.GOOGLE_MAPS
  }
    
    this.launchNavigator.navigate(address, options)
  .then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error)
  );
  }
}
