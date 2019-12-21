import { Component, OnInit, Input, NgZone, OnChanges, ViewChild } from "@angular/core";
import { ModalController, LoadingController, NavParams, Platform, IonContent } from "@ionic/angular";
import { TestingService } from "../../services/testing.service";
import { ToastController } from "@ionic/angular";
import {Datum} from "../../interfaces/especiality";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

declare var google;
@Component({
  selector: "app-modal-trades",
  templateUrl: "./modal-trades.page.html",
  styleUrls: ["./modal-trades.page.scss"]
})
export class ModalTradesPage  {
  @ViewChild(IonContent, {static: true}) content: IonContent;
  map: any; 
  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  lat = "";
  lng = "";
  latlng: any;
  document = false;
  @Input() nombre;
  @Input() pais;
  @Input() newDays: any = [];
  @Input() id: string;
  @Input() token: string;
  @Input() page1 = false;
  @Input() page2 = false;
  @Input() page3 = false;
  @Input() page4 = false;
  @Input() page5 = false;
  @Input() page7 = false;
  @Input() page8 = false;
  @Input() newTools: any = [];
  @Input() newTrasnport: any = [];
  @Input() newTrades: any = [];
  days: any = [];
  a = "";
  b ="";
  mark: any;
  km: number = 20;
  idtrade: number;
  page6 = false;
  disabe = false;
  personaInfo = true;
  hidden = true;
  especialities: Datum[] = [];
  tradesName: any = [];
  toolsName: any = [];
  tradesSelec: any = [];
  toolSelec: any = [];
  filters = [];
  especiality: "";
  name: string;
  last: string;
  email: string;
  phone: string;
  circle: any;
  circleDelete: any = [];
  idEspecialities: number;
  valueExperiencie: number;
  changeColor2="click2";
  metros: number;
  adress: string;
  color1="primary";
  image = "the picture is required"
  imagenTrue = false;
  experience = [
    {
      id: "l234",
      name: "I´m interested in learning this trade.",
      value: 0,
      va: 12345
    },
    {
      id: "1235",
      name: "More than 6 months. ",
      value: 6,
      va: 12346
    },
    {
      id: "1236",
      name: "More than 1 year. ",
      value: 12,
      va: 12347
    },
    {
      id: "1237",
      name: "More than 2 years. ",
      value: 24,
      va: 12348
    },
    {
      id: "1238",
      name: "More than 5 years. ",
      value: 60,
      va: 12349
    },
    {
      id: "1239",
      name: "More than 10 years. ",
      value: 120,
      va: 12340
    }
  ]
  constructor(
    private modalCtrl: ModalController,
    public loadingController: LoadingController,
    private services: TestingService,
    public toastController: ToastController,
    public zone: NgZone,
    public geolocation: Geolocation,
    private router: Router,
    private storage: Storage, 
    private navParam: NavParams,
    private platform: Platform
    
  ) {
    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: ''
    };
    this.autocompleteItems = [];
    this.markers = [];
   
  }
  async ionViewWillEnter() {
    this.getUser(this.token, this.id);
    this.getTradesName();
    this.getToolsName();
    this.getrades();
    this.getEspeciality();
    this.getTools();
    this.currentPosition();
    this.hidden = false;
   
    await this.dia();
  }
  
  async dia(){
  await this.storage.get("dias").then( res =>{
      this.days = res;
      console.log("los dias ", this.days)
  })
  }
  temporal = [];
  daysS: string;
  salirS() {
    this.modalCtrl.dismiss();  
  }

  salirC() {
    this.modalCtrl.dismiss({
      data: this.daysS
    });
  }
  save() {
    this.dias();
    this.saveTradesDays();
  }
  dias() {
    this.temporal = [];
    for (let i = 0; i < this.newDays.length; i++) {
      if (this.newDays[i].isChecked == true) {
        this.temporal.push(`${this.newDays[i].name}|`);
      }
    }
    //console.log(this.temporal);
    //console.log(this.temporal.join(''));
    //convertir array en string
    this.daysS = this.temporal.join("");
    console.log(this.daysS);
  }
  async saveTradesDays() {
    if(this.daysS == ""){
      const toast = await this.toastController.create({
        message: 'Select one o more days',
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }else{
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    let data = {
      id: this.id,
      working_days: this.daysS
    };
    await this.services.addTradeWorkinDays(data, this.token).subscribe(res => {
      if (res.type == "success") {
        loading.dismiss();
        this.modalCtrl.dismiss({
          data: this.daysS,
          valor: "2"
        });
      } else {
        loading.dismiss();
        }
      });
    }
  }
  async presentLoading(loading) {
    return await loading.present();
  }
  async getUser(token, id) {
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    await this.services.getUser(token, id).subscribe(res => {
      this.name = res.data.first_name;
      this.last = res.data.last_name;
      this.email = res.data.email;
      this.phone = res.data.phone_number;
      if (res.data.address == null) {
        loading.dismiss();
      } else {
        loading.dismiss();
      }
    });
  }
  async saveProfile() {
    if(this.name == "" || this.last == "" || this.phone == ""){
      const toast = await this.toastController.create({
        message: 'Complete form',
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }else{
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    let datas = {
      first_name: this.name,
      last_name: this.last,
      email: this.email,
      phone_number: this.phone,
      id: this.id
    };
    await this.services.editUser(datas, this.token).subscribe(res => {
      if (res.type == "success") {
        loading.dismiss();
        this.modalCtrl.dismiss({
          data: this.daysS,
          valor: "2"
        });
      }
    });
    }
  }
  async saveTransport() {
    const loading = await this.loadingController.create({
      message: ""
    });

    if (
      this.newTrasnport[0].isChecked == true &&
      this.newTrasnport[1].isChecked == true || this.newTrasnport[0].isChecked == false && this.newTrasnport[1].isChecked == false
    ) {
      this.presentToast("Select one");
    } else {
      this.presentLoading(loading);
      for (let i = 0; i < this.newTrasnport.length; i++) {
        if (this.newTrasnport[i].isChecked == true) {
          let data = {
            id: this.id,
            transport: this.newTrasnport[i].name
          };
          await this.services
            .addTradesTransport(data, this.token)
            .subscribe(res => {
              if (res.type == "success") {
                loading.dismiss();
                this.modalCtrl.dismiss({
                  data: this.daysS,
                  valor: "2"
                });
              }
              //this.router.navigate(["/user"]);
            });
        } else {
          console.log(` no aceptado ${this.newTrasnport[i].name}`);
        }
      }
    }
  }
  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: `${mensaje}`,
      duration: 2000,
      position: "top"
    });
    toast.present();
  }
  selectedFile = null;
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
 async uploadPicture(){
   if(this.selectedFile == null){
      this.imagenTrue = true;
   }else{
    const loading = await this.loadingController.create({
      message: ""
    });
    loading.present();
    let data = {
      user_id: this.id,
      file: this.selectedFile
    }
    this.services.uploadPicturePerfil(data, this.token).subscribe( res =>{
      loading.dismiss();
      this.modalCtrl.dismiss();
      console.log(res);
      })
    }
  }
  getrades(){
    
    this.services.getTrades().subscribe( res =>{
      //console.log(res.data);
      for(let i = 0; i < res.data.length; i++){
        if(this.tradesName.includes(res.data[i].name) == true){
          this.tradesSelec.push({
            id: res.data[i].id,
            name: res.data[i].name,
            idEspeciality: res.data[i].specialty[0].id,
            isChecked: true
          })
        }else{
          this.tradesSelec.push({
            id: res.data[i].id,
            name: res.data[i].name,
            idEspeciality: res.data[i].specialty[0].id,
            isChecked: false
          })
        }
      }
    }) 
    //console.log(this.newTrades[1].name.includes("Framer"));
   console.log(this.tradesSelec)
  }
  
  getTools(){
    this.services.getTools().subscribe( res =>{
      //console.log(res.data);
      for(let i = 0; i < res.data.length; i++){
        if(this.toolsName.includes(res.data[i].description) == true){
          this.toolSelec.push({
            id: res.data[i].id,
            name: res.data[i].description,
            isChecked: true
          })
        }else{
          this.toolSelec.push({
            id: res.data[i].id,
            name: res.data[i].description,
            isChecked: false
          })
        }
      }
    }) 
    
  }
  async saveToolsdb(checked, id){
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    if(checked == false){
      this.services.addTradesTools(this.id, id, this.token).subscribe( res => {
        if (res.type == "success") {
          loading.dismiss();
        }else{
          loading.dismiss();
        }
      }, err =>{
        loading.dismiss();
      });
    }
    if(checked == true){
      let data = {
        user_id: this.id,
        tool_id: id
      }
      this.services.deleteTools(data, this.token).subscribe( res =>{
        if (res.type == "success") {
          loading.dismiss();
        }else{
          loading.dismiss();
        }
      },error =>{
        loading.dismiss();
      });
    }
      //console.log(checket, id)
      
  }
  
  getTradesName(){
   
    for(let i = 0; i < this.newTrades.length; i++){
      this.tradesName.push(this.newTrades[i].name);
    }
    //console.log(this.tradesName.includes("Framer"));
  }
  getToolsName(){
    for(let i = 0; i < this.newTools.length; i++){
      this.toolsName.push(this.newTools[i].description);
    }
    console.log(this.toolsName);
  }

  saveTrades(checked,idTrade,name, idEspeciality){
    this.filters = [];
    if(checked == true){
 
      //console.log(this.id, idTrade, idEspeciality)
     
        this.deleteTrades(idTrade, idEspeciality);
        console.log("entro una vez aqui")

    }if(checked == false){
      this.filters = [];
      this.idtrade = idTrade;
      //this.page4 = false;
      this.disabe =  true;
      this.page6 = true;

      this.especiality = name;
      this.filterespecialities();
    
      setTimeout(() => {
        this.content.scrollToBottom();
    }, 500);
    }

  }
  deleteTools(cheked, idTools){
    if(cheked == true){

    }if(cheked == false){

    }
  }
  getEspeciality(){
    this.services.getEspeciality().subscribe(res =>{
      this.especialities.push(...res.data);
    })
  }
  filterespecialities(){
    //return console.log(this.especialities.filter((item) => item.trade.name.includes("General Labour")));
    this.filters = [];
    this.filters = this.especialities.filter((item) => item.trade.name.includes(this.especiality));
    console.log(this.filters);
  } 
  saveExperience(id, value){
    for(let i = 0; i < this.experience.length; i++){
      if(this.experience[i].id == id){
        document.getElementById(`${this.experience[i].id}`).className = "onclick md ion-activatable hydrated";
        this.valueExperiencie = value;
        //alert(this.idTrades);
      }else{
        document.getElementById(`${this.experience[i].id}`).className = "click2 md ion-activatable hydrated";
      }
    }
  }
  selectMore(){
    //this.page4 = true;
      
     
     
     console.log(this.idtrade, this.valueExperiencie, this.idEspecialities);
     this.saveTradesdb();

  }
  async saveTradesdb(){
    if(this.idEspecialities == undefined){
     this.presentToast('specialty is required')
     this.disabe =  true;

    }else if(this.valueExperiencie == undefined){
      this.presentToast('Experiencie is required')
      this.disabe =  true;
    }
    
    else{
        const loading = await this.loadingController.create({
          message: ""
        });
        loading.present();
        //console.log(this.userid, this.idTrades, this.idEspecialities, this.valueExperiencie);
        let data = {
          user_id: this.id,
          trade_id: this.idtrade,
          overtime: this.valueExperiencie,
          specialty_id: this.idEspecialities
        }
      await this.services.addTrades(data, this.token).subscribe(res =>{
          this.presentToast("add trade to user successfully");
          this.filters = [];
          this.page6 = false;
          loading.dismiss();
          this.idtrade = undefined; this.valueExperiencie = undefined; this.idEspecialities = undefined;
          this.content.scrollToTop();
          this.disabe = false;
        }, error =>{
          this.presentToast("trade and especiality it already exists");
        })
    }
  }
  async deleteTrades(idTrade, idEspeciality){
    const loading = await this.loadingController.create({
      message: ""
    });
    loading.present();
    let data = {
      user_id: this.id,
      trade_id: idTrade,
      specialty_id: idEspeciality
    }
    await this.services.deleteTrades(data, this.token).subscribe(res => {
      if(res.type == "success"){
        loading.dismiss()
      }

    })
    //console.log("entro una vez aqui")
  }
 
  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        if(predictions){
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        }
    });
  }
  selectSearchResult(item){
    this.metros = 20;
    this.clearMarkers();
    this.autocompleteItems = [];

    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        /* let position = {
             lat: results[0].geometry.location.lat,
              lng: results[0].geometry.location.lng
        };*/
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map
        });
        this.markers.push(marker);
        this.mark = marker;
        console.log(item.description);
        this.adress = item.description;
        this.map.setCenter(results[0].geometry.location);
        //this.latlng = new  google.maps.LatLng(results[0].geometry.viewport.ka.h, results[0].geometry.viewport.pa.h);  
        this.a =  results[0].geometry.viewport.ka.h;
        this.b =  results[0].geometry.viewport.pa.h;
        this.drawCircle(this.a, this.b, 20000)

      }
      
    })
  }
  
  clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      //console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
    if(this.circle == undefined){
      console.log("hola")
    }else{
      this.circle.setMap(null);
    }
  }

  drawCircle(lat, lng, num){
    var latj = new google.maps.LatLng(lat, lng);
        var sunCircle = {
          strokeColor: "#5FC95A",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#c3fc49",
          fillOpacity: 0.35,
          map: this.map,
          center: latj,
      };

        var cityCircle = new google.maps.Circle(sunCircle);
        //this.circleDelete.push(cityCircle);
        //circle type any global , num = radius, mark = market de gooogle
        this.circle = cityCircle;
        cityCircle.setRadius(num);
        cityCircle.bindTo('center', this.mark, 'position');
        console.log(cityCircle);
  }

  dibujar(event ){

    if(this.mark == undefined){

    }else{
    this.km = event.detail.value;
    let radius = event.detail.value * 1000;
    this.circle.setRadius(radius);
    this.circle.bindTo('center', this.mark, 'position');
    }
  }

  async currentPosition(){
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: rta.coords.latitude, lng: rta.coords.longitude},
      zoom: 10
    });
  }

  async saveTradesAdress(){
    const loading = await this.loadingController.create({
      message: ""
    });
    this.presentLoading(loading);
    if(this.adress == ""){

    }else{
    let data = {
      id: this.id,
      address: this.adress,
      location: `${this.a}, ${this.b}`
    }
      this.services.addTradeAdress(data, this.token).subscribe(res =>{
        if (res.type == "success") {
          loading.dismiss();
          this.modalCtrl.dismiss({
            data: this.daysS,
            valor: "2",
            address: this.adress
          });
        }
      })
    }
  }
  back() {
    this.modalCtrl.dismiss();
    this.router.navigate(["./home"]);
    //this.menu.close("first");
    this.storage.remove("validate");
  }
  async saveDocument(){
    if(this.selectedFile == null){
      this.document =  true;
    }else{
      const loading = await this.loadingController.create({
        message: ''
      });
      this.presentLoading(loading);
    let data = {
      user_id: this.id,
      file: this.selectedFile
    }
    this.services.addDocumentd(data, this.token).subscribe(res =>{
      console.log(res);
      if(res.type == "success"){
        loading.dismiss();
       this.modalCtrl.dismiss();
      }
    })
  }
}
  
 
}
