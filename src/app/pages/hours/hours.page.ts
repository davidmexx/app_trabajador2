import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../services/testing.service';
import { Storage } from "@ionic/storage";
import { Datum } from '../../interfaces/viewJobs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.page.html',
  styleUrls: ['./hours.page.scss'],
})
export class HoursPage  {

  viewJob: Datum[]= [];
  idUser: number;
  token: string;
  endTimes =  "";
  endT = "";
  constructor(private services: TestingService, private storage: Storage, private nav: NavController) { }

  async ionViewWillEnter() {
    await this.gettoken();
    await this.viewJo();
  }
  async viewJo(){
   
    this.viewJob = [];
    this.services.viewJobs(this.token).subscribe(res =>{
      //console.log(res.data)
     this.viewJob.push(...res.data);
     console.log("los trabajos", this.viewJob);
    }, error=>{
       // loading.dismiss();
    })
    
  }
  async gettoken(){
    await this.storage.get("token").then(res =>{
      this.token = res.token;
      this.idUser = res.user;
      console.log("token es", res);
    });
  }
  generateQr(projectId, requestId){
    console.log(projectId, requestId);
    this.nav.navigateForward(['/view-qr', projectId, requestId])
  }

  endTime(){
    this.endTimes = this.endT.substr(11,5);
    console.log("final riempo", this.endT.substr(11,5));
  }
  
}
 