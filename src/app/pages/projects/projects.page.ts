import { Component,  ViewChild } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { NotificationsService } from '../../services/notifications.service';
import { TestingService } from '../../services/testing.service';
import { ViewJobs, Datum } from '../../interfaces/viewJobs';
import { LoadingController, IonSegment } from '@ionic/angular';



@Component({
  selector: "app-projects",
  templateUrl: "./projects.page.html",
  styleUrls: ["./projects.page.scss"]
})
export class ProjectsPage {
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  language: any = [];
  button = {};
  token: string;
  notifications: any[] = [];
  jobs: any[] = [];
  ignalId: string;
  idUser: number;
  viewJob: any[]= [];
  fecha: Date =  new Date();
  deatil = "";
  data = true;
  newdate = `${this.fecha.getFullYear()}-${this.fecha.getMonth()+1}-${this.fecha.getDate()}`;
  constructor(private storage: Storage, private router: Router, private services: TestingService, private pushNotification: NotificationsService, public loadingController: LoadingController) {}

async   ionViewWillEnter() {
  this.segment.value = 'job';
    await this.pushNotification.configuracionInicial();
    await this.gettoken();
   await this.storage.get("language").then(data => {
      console.log("init");

      if (data === "en") {
        fetch("../../../assets/language.json")
          .then(res => res.json())
          .then(json => {
            this.language = json.en[0].menu[0];
            this.button = json.en[0].button[0];
            console.log(this.language);
          });
      }
      if (data === "es") {
        fetch("../../../assets/language.json")
          .then(res => res.json())
          .then(json => {
            this.language = json.es[0].menu[0];
            this.button = json.es[0].button[0];
            console.log(this.language);
          });
      }
    });
    await this.storage.get("detail").then(res =>{
        if(res != null){
        this.router.navigate(['user/detail']); 
        }else{
          
        }
    })
    await this.storage.get("oneSignal").then(res =>{
      this.ignalId =  res;
      console.log("el id es ", res)
    })
    await this.saveOneSignalId(this.ignalId, this.token);
    
  } 

  async saveOneSignalId(idSignal, token){
    let data = {
      onesignal_id: idSignal,
      id: this.idUser
    }
      this.services.editUserSignal(data, token).subscribe(res =>{
        console.log(res.type);
      })
  }

  async gettoken(){
    await this.storage.get("token").then(res =>{
      this.token = res.token;
      this.idUser = res.user;
      console.log("token es", res);
    });
  }

  async viewJo(valor){
    
    this.viewJob = [];
    this.services.viewJobs(this.token).subscribe(res =>{
     console.log(res);
     this.data = true;
      for(let i = 0; i < res.data.length; i++){
       if(valor == 0){
        if(res.data[i].request_worker == null){

        }else{
        let hoy             = new Date();
        let fechaFormulario = new Date(`${res.data[i].request_worker.start_date}`);
        hoy.setHours(0,0,0,0);
        if(hoy <= fechaFormulario && res.data[i].user_accepted == valor){
          this.viewJob.push({
            idRequest: res.data[i].request_id,
            nameProject: res.data[i].project.name,
            addres: res.data[i].project.address

           })
          } 
        }
       }else{
        if(res.data[i].request_worker == null){

        }else{
        let hoy             = new Date();
        let fechaFormulario = new Date(`${res.data[i].request_worker.start_date}`);
        hoy.setHours(0,0,0,0);
        if(res.data[i].user_accepted == valor && res.data[i].project.status == "pending"){
          this.viewJob.push({
            idRequest: res.data[i].request_id,
            nameProject: res.data[i].project.name,
            addres: res.data[i].project.address

           })
          } 
        }
       }
       setTimeout(() => {
        this.data = false;
    }, 2000);
      }
      
    }, error=>{
       
    })
    console.log("los trabajos", this.viewJob);
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  detail(id){
    if(this.deatil == "0"){
      this.storage.set("detail", {id: id, enabled: false});
      this.router.navigate(['user/detail']); 
    }else{
      this.storage.set("detail", {id: id, enabled: true});
      this.router.navigate(['user/detail']); 
    }
  }
  doRefresh(event) {
    if(this.deatil == "0"){
      console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.viewJo(0);
      event.target.complete();
    }, 2000);
    }else{
      console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.viewJo(1);
      event.target.complete();
    }, 2000);
    }
  }
  segmentChanged(event){
      console.log(event.detail.value);
      if(event.detail.value =="activate"){
        this.deatil = "1";
        this.viewJo(1);
      }else{
        this.deatil = "0";
        this.viewJo(0);
      }
  }

   
}
