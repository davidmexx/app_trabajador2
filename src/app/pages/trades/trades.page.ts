import { Component, OnInit, ViewChild} from '@angular/core';
import { TestingService } from 'src/app/services/testing.service';
import { Storage } from '@ionic/storage';
import { LoadingController, IonSlides, MenuController, ModalController } from '@ionic/angular';
import { Datum } from '../../interfaces/especiality';
import { dtsT } from '../../interfaces/tools';
import { Router } from "@angular/router";
import { ToastController, } from '@ionic/angular';
import Swal from "sweetalert2";
import { ModalTradesPage } from "src/app/modals/modal-trades/modal-trades.page";
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-trades',
  templateUrl: './trades.page.html',
  styleUrls: ['./trades.page.scss'],
})


export class TradesPage implements OnInit {
  @ViewChild (IonSlides, {static: true}) slides: IonSlides;
  token: string;
  userid: number;
  especiality: "";
  noPage = 1;
  Trades: any[] = [];
  especialities: Datum[] = [];
  tools: dtsT[] = [];
  idTrades: number;
  idEspecialities: number;
  valueExperiencie: number;
  daysS: string;
  url = "http://api.araconsultoriaydesarrollos.com/uploads/";
  idtools: number;
  transporte: string;

  addres: string;
  city: string;
  stat: string;
  zipco: string;
  direcctio: string;

  nameVehicle: string;
  lan: number;
  changeColor22="click22";

  experience = [
    {
      id: "l",
      name: "I´m interested in learning this trade.",
      value: 0
    },
    {
      id: "2",
      name: "More than 1 year. ",
      value: 12
    },
    {
      id: "3",
      name: "More than 2 years. ",
      value: 24
    },
    {
      id: "4",
      name: "More than 5 years. ",
      value: 60
    },
    {
      id: "5",
      name: "More than 6 months. ",
      value: 6
    },
    {
      id: "6",
      name: "More than 10 years. ",
      value: 120
    }
  ]
  days = [
    {
      id: "l",
      name: "Monday",
      isChecked: true
    },
    {
      id: "2",
      name: "Tuesday",
      isChecked: false
    },
    {
      id: "3",
      name: "Wednesday",
      isChecked: false
    },
    {
      id: "4",
      name: "Thursday",
      isChecked: false
    },
    {
      id: "5",
      name: "Friday",
      isChecked: false
    },
    {
      id: "6",
      name: "Saturday",
      isChecked: false
    },
    {
      id: "7",
      name: "Sunday",
      isChecked: false
    }
  ]
  temporal = [];
   filters = [];
   toolss = [];
   nuevoTol = [];
   tls = [];
  constructor(private services: TestingService, 
    private storage: Storage, 
    public loadingController: 
    LoadingController, 
    private router: Router, 
    public toastController: ToastController, 
    private menu: MenuController,
    private modal: ModalController,
    public alertController: AlertController ) {  }

  ngOnInit() {
    this.menu.enable(false, "first");
   this.getTrades()
   this.getEspeciality();
   this.getTols();
   this.slides.lockSwipes(true);
  }
  changeColor="click";
  changeColor2="click2"
  color = "light";

 async getTrades(){
  const loading = await this.loadingController.create({
    message: ''
  });
  this.presentLoading(loading);
   await this.services.getTrades().subscribe( res =>{
     this.Trades = res.data;
     loading.dismiss();
   })
  }
  getTols(){
    this.services.getTools().subscribe(res =>{
      for(let i = 0; i < res.data.length; i++){
        this.tls.push({
          id: res.data[i].id,
          description: res.data[i].description,
          isChecked: false
        })
      }
    })
    console.log(this.tls);
  }
  async presentLoading(loading) {
		return await loading.present();
  }
  saveTrades(id, name){
    for(let i = 0; i < this.Trades.length; i++){
      if(this.Trades[i].id == id){
        document.getElementById(`${this.Trades[i].id}`).className = "onclick";
        this.idTrades = id;
        this.especiality = name;
        //alert(this.idTrades);
      }else{
        document.getElementById(`${this.Trades[i].id}`).className = "click";
      }
    }
  }
  
  saveExperience(id, value){
    for(let i = 0; i < this.experience.length; i++){
      if(this.experience[i].id == id){
        document.getElementById(`${this.experience[i].name}`).className = "onclick2 md ion-activatable hydrated";
        this.valueExperiencie = value;
        //alert(this.idTrades);
      }else{
        document.getElementById(`${this.experience[i].name}`).className = "click22 md ion-activatable hydrated";
      }
    }
  }
  savetools(id){
    for(let i = 0; i < this.tools.length; i++){
      if(this.tools[i].id == id){
        document.getElementById(`${this.tools[i].id}`).className = "onclick";
        this.idtools = id;
        //alert(this.idTrades);
      }else{
        document.getElementById(`${this.tools[i].id}`).className = "click";
      }
    }
  }
  
  async getEspeciality(){
    const loading = await this.loadingController.create({
      message: ''
    });
    this.presentLoading(loading);
     await this.services.getEspeciality().subscribe( res =>{
       this.especialities.push(...res.data);
       //this.Trades = res;
       console.log(this.especialities)
       loading.dismiss();
     })
  }
  save(){
    if(this.transporte == undefined){
      this.presentToast("Select you primary means of transport");
     
    }else{
    console.log(this.nameVehicle);
    this. saveTradesTransport();
    this.storage.set("validate", "si");
    }
    
  }

  dias(){
    this.temporal = [];
    for(let i = 0; i < this.days.length; i++ ){
      if(this.days[i].isChecked == true){
        this.temporal.push(`${this.days[i].name}|`);
      }
    }
    console.log(this.temporal);
    console.log(this.temporal.join(''));
    this.daysS = this.temporal.join('');
    console.log(this.daysS);
  }

  async saveTradesdb(){
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    console.log(this.userid, this.idTrades, this.idEspecialities, this.valueExperiencie);
    let data = {
      user_id: this.userid,
      trade_id: this.idTrades,
      overtime: this.valueExperiencie,
      specialty_id: this.idEspecialities
    }
    await this.services.addTrades(data, this.token).subscribe(res =>{
      this.presentToast("add trade to user successfully");
      this.idTrades = undefined;
      this.idEspecialities == undefined;
      this.valueExperiencie == undefined;
      loading.dismiss();
    }, error =>{
      loading.dismiss();
      this.presentToast("trade and especiality it already exists");
    })
  }
  saveTradesAdress(){
    let data = {
      id: this.userid,
      address: this.direcctio
    }
    this.services.addTradeAdress(data, this.token).subscribe(res =>{
      console.log(res);
    })
  }
  async saveTradesDays(){
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    let data = {
      id: this.userid,
      working_days: this.daysS
    }
    this.services.addTradeWorkinDays(data, this.token).subscribe(res =>{
      if(res.type == "success"){
        loading.dismiss();
      }
    })
  }
  saveTradesTools(){
    
   /* let data = {
      user_id: this.userid,
      tool_id: this.idtools
    }
    this.services.addTradesTools(this.userid, this.idtools, this.token).subscribe(res =>{
      console.log(res);
    }) */
    for(let i = 0; i < this.tls.length; i++){
      if(this.tls[i].isChecked == true){
        this.services.addTradesTools(this.userid, this.tls[0].id, this.token).subscribe(res =>{
          console.log(res);
        })
      }
    }
  }
  saveTradesTransport(){
    let data = {
      id: this.userid,
      transport: this.transporte
    }
    this.services.addTradesTransport(data, this.token).subscribe(res =>{
      console.log(res);
      this.router.navigate(["/user/user"]);
    })
  }

  ionViewWillEnter(){
    this.storage.get("token").then(res =>{
      this.token = res.token;
      this.userid = res.user;
    })
  }
  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: `${mensaje}`,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  filterespecialities(){
    //return console.log(this.especialities.filter((item) => item.trade.name.includes("General Labour")));
    this.filters = this.especialities.filter((item) => item.trade.name.includes(this.especiality));
    console.log(this.filters);
  }
 
  async addAddres(){
    const modal = await this.modal.create({
      component: ModalTradesPage,
      componentProps: {
        token: this.token,
        id: this.userid,
        page7: true
      }
    });
    await modal.present();
    modal.onDidDismiss().then((res: any) => {
      console.log(res);
      this.addres = res.data.address;
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.noPage++;
      this.slides.lockSwipes(true);
      //this.gestorage();
    });
  }

  slidePrev() {
    this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.noPage--;
        this.slides.lockSwipes(true);
  }
  slideNext() {
    
      if(this.idTrades == undefined){
        this.presentToast("Select the trades you have experience in or want to learn");
      }else{
        this.filterespecialities();
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.noPage++;
        this.slides.lockSwipes(true);
        
      }
  }
  slideTrades(){
    if(this.idEspecialities == undefined || this.valueExperiencie == undefined){
      this.presentToast("select your speciality or your experience");
    }else{
    this.saveTradesdb();
    this.presentAlert();
    }
  }
  slideAddres(){
    if(this.addres == undefined){
      this.presentToast("select your address");
    }else{
      this.addAddres();
    }
  }
  slideDays(){
    if(this.days[0].isChecked == false && this.days[1].isChecked == false && this.days[2].isChecked == false && this.days[3].isChecked == false && this.days[4].isChecked == false && this.days[5].isChecked == false && this.days[6].isChecked == false){
      this.presentToast("What days are you availableto work");
      this.noPage = this.noPage - 1;
    }else{
    //console.log(this.days);
    this.dias()
    this.saveTradesDays();
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.noPage++;
    this.slides.lockSwipes(true);
    }
  }
  slideTools(){
    for(let i = 0; i < this.tls.length; i++){
      if(this.tls[i].isChecked == true){
        this.services.addTradesTools(this.userid, this.tls[0].id, this.token).subscribe(res =>{
          console.log(res);
        })
      }
    }
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.noPage++;
    this.slides.lockSwipes(true);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Do you want to select one more trade?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.noPage++;
            this.slides.lockSwipes(true);
          }
        }, {
          text: 'Okay',
          handler: () => {
            //this.idEspecialities == "undefined"; 
            this.valueExperiencie == undefined;
            this.idTrades == undefined;
            this.slides.lockSwipes(false);
            this.slides.slidePrev();
            this.noPage = 1;
            console.log(this.noPage)
            this.slides.lockSwipes(true);
          }
        }
      ]
    });

    await alert.present();
  }


 

}
