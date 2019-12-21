import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { MenuController, NavController, ModalController, Platform } from "@ionic/angular";
import { TestingService } from "../../services/testing.service";
import { Storage } from "@ionic/storage";
import { LoadingController } from "@ionic/angular";
import { User, Data } from "../../interfaces/user";
import { Router } from "@angular/router";
import { EditUserPage } from "../../pages/profile/edit-user/edit-user.page";
import { ModalTradesPage } from "src/app/modals/modal-trades/modal-trades.page";
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage {
  token = "";
  id = "";
  profile: string;
  days: any = [];
  nombre: string;
  tools: any = [];
  firts: string;
  last: string;
  email: string;
  phone: string;
  names: string;
  description: string;
  urlImage: string;
  address: string;
  availability: string;
  tranportA: any = [];
  transport: string;
  idC: number;
  trades: any = [];
  document: any = [];
  ratinng: number;
  va = 0;
  arrayDias = [
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    },
    {
      name: "Sunday"
    }
  ];
  arrayTransport = [{ name: "Vehicle" }, { name: "Transport" }];
  sendTrasnport: any = [];
  sendias: any = [];

  constructor(
    private menu: MenuController,
    private services: TestingService,
    private storage: Storage,
    public loadingController: LoadingController,
    private router: Router,
    private nav: NavController,
    private modal: ModalController,
    private FileTransfer: FileTransfer,
    private file: File,
    private DocumentViewer: DocumentViewer,
    private platform: Platform

  ) {}
  status = "Complete profile 50%";
  proggres = 0.5;
  toolss: number;
  async ionViewWillEnter() {

    this.days = [];
    this.tranportA = [];
    await this.gestorage();
  }
  async gestorage() {
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);

    this.days = [];
    this.tools = [];
    this.tranportA = [];
    await this.storage.get("token").then(res => {
      this.profile = "";
      this.days = [];
      this.tranportA = [];
      console.log(res);
      this.token = res.token;
      this.id = res.user;
      this.services.getUser(res.token, res.user).subscribe(res => {
        //this.user = res.data;
        //this.company = res.data
        this.profile = `https://api.haskyconnections.com/uploads/${res.data.profile_image}`;
        this.firts = res.data.first_name;
        this.last = res.data.last_name;
        this.email = res.data.email;
        this.phone = res.data.phone_number;
        this.address = res.data.address;
        this.availability = res.data.working_days;
        this.transport = res.data.transport;
        this.trades = res.data.trades;
        this.document =  res.data.documents;
        if(res.data.rating == null){
          this.va = 0;
        }else{
          this.va = res.data.rating;
        }
        
        //console.log(res.data.trades);
        this.address = res.data.address;
        this.separator(`${res.data.working_days}`);
        this.transports(`${res.data.transport}`);
        this.tools = res.data.tools;
        console.log(res.data.address);
        if(res.data.tools.length == 0 || res.data.working_days == undefined || res.data.trades.length == 0 || res.data.address == undefined || res.data.address == ""){
          this.status = "Complete profile 50%";
          this.proggres = 0.5;
        }else{
          this.proggres = 1.0
          this.status = "Find jobs";;
        }

        //console.log(this.token);
        loading.dismiss();
        //this.user = res.data;
      });
    });
    //console.log(this.user);
  }

  async presentLoading(loading) {
    return await loading.present();
  }
  hola() {
    // console.log(this.user);
  }

  editUser(page) {
    let a = 0;
    if (page == "2") {
      this.newdays();

      this.storage.set("days", this.sendias);
    }
    if (page == 3) {
      this.newTransport();
      this.storage.set("transport", this.sendTrasnport);
    }
    this.router.navigate([`edit-user/${page}`]);
    //this.nav.

    //console.log(this.names, this.description, this.idC, this.urlImage);
  }
  editCompany() {
    this.router.navigate(["edit-company"]);
    this.storage.set("company", {
      name: this.names,
      description: this.description,
      id: this.idC,
      url: this.urlImage
    });
  }

  separator(string) {
    //elimina el ultimo |
    let res = string.split("|");
    res.length = res.length - 1;
    this.days.push(...res);
    console.log(this.days);
  }
  newdays() {
    this.sendias = [];
    for (let i = 0; i < this.arrayDias.length; i++) {
      if (this.days.includes(this.arrayDias[i].name) == true) {
        this.sendias.push({
          name: this.arrayDias[i].name,
          isChecked: true
        });
      } else {
        this.sendias.push({
          name: this.arrayDias[i].name,
          isChecked: false
        });
      }
    }
    console.log(this.sendias);
  }

  transports(string) {
    this.tranportA.push(string);
    console.log("tranport a ", this.tranportA);
  }
  newTransport() {
    this.sendTrasnport = [];
    for (let i = 0; i < this.arrayTransport.length; i++) {
      if (this.tranportA.includes(this.arrayTransport[i].name) == true) {
        this.sendTrasnport.push({
          name: this.arrayTransport[i].name,
          isChecked: true
        });
      } else {
        this.sendTrasnport.push({
          name: this.arrayTransport[i].name,
          isChecked: false
        });
      }
    }
    console.log(this.sendTrasnport);
  }
  async modals(card) {
    if (card == 1) {
      const modal = await this.modal.create({
        component: ModalTradesPage,
        componentProps: {
          newDays: this.sendias,
          token: this.token,
          id: this.id,
          page1: true
        }
      });
      await modal.present();
      modal.onDidDismiss().then((res: any) => {
        this.gestorage();
      });
    }
    if (card == 2) {
      this.newdays();
      const modal = await this.modal.create({
        component: ModalTradesPage,
        componentProps: {
          newDays: this.sendias,
          token: this.token,
          id: this.id,
          page2: true
        }
      });
      await modal.present();

      modal.onDidDismiss().then((res: any) => {
        this.gestorage();
      });
    }
    if (card == 3) {
      this.newTransport();
      const modal = await this.modal.create({
        component: ModalTradesPage,
        componentProps: {
          newTrasnport: this.sendTrasnport,
          token: this.token,
          id: this.id,
          page3: true
        }
      });
      await modal.present();
      modal.onDidDismiss().then((res: any) => {
        this.gestorage();
      });
    }
    if (card == 4) {
      this.newTransport();
      const modal = await this.modal.create({
        component: ModalTradesPage,
        componentProps: {
          newTrades: this.trades,
          token: this.token,
          id: this.id,
          page4: true
        }
      });
      await modal.present();
      modal.onDidDismiss().then((res: any) => {
        this.gestorage();
      });
    }
    if (card == 5) {
      this.newTransport();
      const modal = await this.modal.create({
        component: ModalTradesPage,
        componentProps: {
          newTrasnport: this.sendTrasnport,
          token: this.token,
          id: this.id,
          page5: true
        }
      });
      await modal.present();
      modal.onDidDismiss().then((res: any) => {
        this.gestorage();
      });
    }
    if (card == 7) {
      this.newTransport();
      const modal = await this.modal.create({
        component: ModalTradesPage,
        componentProps: {
          newTrasnport: this.sendTrasnport,
          token: this.token,
          id: this.id,
          page7: true
        }
      });
      await modal.present();
      modal.onDidDismiss().then((res: any) => {
        this.gestorage();
      });
    }
    if (card == 8) {
      const modal = await this.modal.create({
        component: ModalTradesPage,
        componentProps: {
          newTools: this.tools,
          token: this.token,
          id: this.id,
          page8: true
        }
      });
      await modal.present();
      modal.onDidDismiss().then((res: any) => {
        this.gestorage();
      });
    }
  }
  back() {
    this.router.navigate(["./home"]);
    this.menu.close("first");
    this.storage.remove("validate");
  }
  DownloadInpreview(urls){
    let urs = `https://api.haskyconnections.com/uploads/${urls}`; 
    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }else{
      path = this.file.dataDirectory;
    }

    const transfer = this.FileTransfer.create();
    transfer.download(`${urs}`, path + 'myFile.pdf').then( entry =>{
      let url = entry.toURL();
      this.DocumentViewer.viewDocument(url, 'application/pdf', {});
    }, (error) =>{
      console.log(error);
    })
   
  }
}
