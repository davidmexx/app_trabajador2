import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TestingService } from '../../services/testing.service';

@Component({
  selector: 'app-view-qr',
  templateUrl: './view-qr.page.html',
  styleUrls: ['./view-qr.page.scss'],
})
export class ViewQrPage implements OnInit {
  op = {
    allowSlidePrev: false,
    allowSlideNext: false
  }
  projectId: string;
  requestId: string;
  idUser: number;
  token: string;
  data = "";
  constructor(private activate: ActivatedRoute, private storage: Storage, private service: TestingService) {
   }
  fecha: Date = new Date();
  hour = "";
  date = "";
  image = "";
  alt ="";
 async ionViewWillEnter() {
  this.image = "";
  this.projectId =  await this.activate.snapshot.paramMap.get('projectId');
  this.requestId =  await this.activate.snapshot.paramMap.get('requestId');
  

  this.hour = `${this.fecha.getHours()}:${this.fecha.getMinutes()}`;
  this.date = `${this.fecha.getFullYear()}-${this.fecha.getMonth()+1}-${this.fecha.getDate()}`;
  //console.log(this.hour) 
 
  await this.gettoken();
  //await this.getQr();
     this.data = `projectId:${this.projectId} requestId:${this.requestId} userdId:${this.idUser} date:${this.date} time:${this.hour}`
  }
async  ngOnInit(){
  
  }

  async gettoken(){
    this.image = "";
    await this.storage.get("token").then(res =>{
      this.token =  res.token;
      this.idUser = res.user;
      console.log("token es", res);
     
    });
  }

 async getQr(){
    let data = {
      user_id: this.idUser,
      project_id: this.projectId,
      request_id: this.requestId,
      date: this.date,
      time: this.hour
    }
    await this.service.getQr(data, this.token).subscribe( async (res) =>{
     //this.data.image = res.data;
     console.log(this.image)
    })
  }
  relo(){
    this.getQr()
    
  }
  
}
 