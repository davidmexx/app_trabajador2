import { Component, OnInit, ElementRef, ViewChild, NgZone  } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TestingService } from "../services/testing.service";
import { RootObject, Ability, Ability2 } from "../interfaces/interface";
import { Respuesta } from "../interfaces/contractor";
import { ModalController, LoadingController } from '@ionic/angular';
import { Router } from "@angular/router";
import { Geolocation } from '@ionic-native/geolocation/ngx';



import { Observer, observable } from "rxjs";
import Swal from 'sweetalert2'
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { ModalTradesPage } from '../modals/modal-trades/modal-trades.page';
declare var google;
@Component({
  selector: "app-test",
  templateUrl: "./test.page.html",
  styleUrls: ["./test.page.scss"]
})

export class TestPage implements OnInit {
 // @ViewChild('fileInput') fileInput: ElementRef;
 
  map: any;
  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  loading: any;
  ///////////////////
  habilidades: Ability2[] = [];
  userus = {};
  processing:boolean;
  uploadImage: string;
  constructor(private http: HttpClient, 
    private abiliti: TestingService, 
    private modalCtrl: ModalController, 
    private router: Router, 
    public zone: NgZone,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController) {
      this.geocoder = new google.maps.Geocoder;
      let elem = document.createElement("div")
      this.GooglePlaces = new google.maps.places.PlacesService(elem);
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = {
        input: ''
      };
      this.autocompleteItems = [];
      this.markers = [];
      this.loading = this.loadingCtrl.create();
    }
  ngOnInit() {
    this.abiliti.getAbilities().subscribe(res => {
      // console.log(res);
      this.habilidades.push(...res.abilities);
      console.log(this.habilidades);
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.9011, lng: -56.1645},
        zoom: 15
      });
    });
    /*
    this.abiliti.getContractor().subscribe(data => {
      this.userus = data;
      console.log(this.userus);
    });*/
  }
  test(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    })
    
    Toast.fire({
      type: 'success',
      title: 'Signed in successfully'
    })
  }
  file: File;
 changeListener($event) : void {
    this.file = $event.target.files[0];
    console.log(this.file);
  }
  selectedFile = null;
  onFileSelected(event){
    
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  } 
  onUpload(){
    let fb = new FormData();
    fb.append('user_id', "10");
    fb.append('file', this.selectedFile);
    let data = {
      user_id: "10",
      file: this.selectedFile
    }
    let axiosConfig = {
      headers: {
        
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
       
        "Accept": "application/json",
       
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkNzBkMGZiOTRiNzg3ZjdiNjE4MDA4OTY2YzYzMTQyYWRkODNmY2NlNzdkOTYwYWUxNDliYzdmOGYwZjkyYTE0ZDBkNDMzMDljZjc3NDdjIn0.eyJhdWQiOiIzIiwianRpIjoiMGQ3MGQwZmI5NGI3ODdmN2I2MTgwMDg5NjZjNjMxNDJhZGQ4M2ZjY2U3N2Q5NjBhZTE0OWJjN2Y4ZjBmOTJhMTRkMGQ0MzMwOWNmNzc0N2MiLCJpYXQiOjE1NzM2MzIxODgsIm5iZiI6MTU3MzYzMjE4OCwiZXhwIjoxNjA1MjU0NTg4LCJzdWIiOiI2MiIsInNjb3BlcyI6W119.BBUM1Q9azzibZIzdzA6tOAQhmm63Xiatq-i4R94OugOkrHhWRkkHQPQGj1HfsYifTFEITbxJCm_PXtV5NiImLkH-LdCxTNnNC2cBUM--ykOfGduJAeaqKIit8UhmHpvlczkkJQCa70I2pNROzla_pzaWs7I2zz4bUCv9GNeXsMi6DLH2-b9bz1yFgJFD46G5mZr355kj9XsPqpZF2PID_z33WZkaOyXcv0YKLAkNvvIDkbUuz1jkxfB8s-wJrRFu5CIRbVBh1Pj_UGtORzQ_BDIKvSol_uNI_CkyoiOE_KcTtL53Fe4QGRnslghovT93nfDNDeLCgRC_q12DsEeGhT75CHyEgxcebCbr_tQmiiyQ8aSpSwaXnO7zv6-gLeov1oXfnmWjgCNwA7a4QIHS4wh0WC8Nq_kjWPn2LqiA93sMda_AYaNu1n8jPzFs0Nnjg7N4Rur6cYJbSqS1jNMYF9DkJic41uOpPsoYZHGIOrOwWrmj9uwQqwSjtlo8H1J0C1jzDcTgUMExTyV-E8BKivB0iwiuNSQYRKU0JNBIl78pN-_-Oj-hVInQR2mYmBrQ60Th7G6kaHSQW53gzSvaa_opLXloUzzTcmfSVe15jZpF7v5qnwoFUjuEnGn6sN6PSlU9k6WtPEfHI_w6RLVA7OAvucG-tDz8i-VfJ6iNQ2k`
      }
    };
    this.http.post("https://api.haskyconnections.com/auth/user/document",fb,axiosConfig).subscribe(res =>{
      console.log(res);
    })
  }
 async modal(){
    const modal = await this.modalCtrl.create({
      component: ModalTradesPage,
      componentProps: {
        nombre: 'ismael',
        pais: 'mexico'
      }
    });
    await modal.present();
    const {data } = await modal.onDidDismiss();
    console.log(data);
  }
  hola(){
    this.router.navigate(["/code"]);
  }
  evento(event){
    console.log(event)
  }
  datos = [
    {
      name: "primary",
      selected: true
    },
    {
      name: "secondary",
      selected: false
    },
    {
      name: "success",
      selected: true
    }
  ];
  tryGeolocation(){
   
    this.clearMarkers();//remove previous markers

    this.geolocation.getCurrentPosition().then((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      let marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'I am here!'
      });
      this.markers.push(marker);
      this.map.setCenter(pos);
     

    }).catch((error) => {
      console.log('Error getting location', error);
     
    });
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
    this.clearMarkers();
    this.autocompleteItems = [];

    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        // let position = {
        //     lat: results[0].geometry.location.lat,
        //     lng: results[0].geometry.location.lng
        // };
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map
        });
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    })
  }
  
  clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

}
