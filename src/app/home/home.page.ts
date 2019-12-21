import { Component, OnInit } from "@angular/core";
import { NavController, MenuController } from "@ionic/angular";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { Router } from "@angular/router";
import { LoadingController, AlertController, Platform } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { ToastController } from "@ionic/angular";
import { HTTP } from "@ionic-native/http/ngx";
import { TestingService } from "../services/testing.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-home", 
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  userData = null;
  lan = "";
  title = "";
  language: any = [];
  //postData = {};
  loading = "";
  FB_APP_ID: number = 1380470452125843;
  loginData = {};
  email = "";
  password = "";
  dts = "";
  passwords = "password";
  valor = 0;
  constructor(
    private facebook: Facebook,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController,
    public http: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    private menu: MenuController,
    private https: HTTP,
    private services: TestingService
  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: `error`,
      position: "top",
      duration: 2000
    });
    toast.present();
  }

  async doFbLogin() {
    const loading = await this.loadingController.create({
			message: 'Please wait...'
		});
		this.presentLoading(loading);
	//	let permissions = new Array<string>();

		//the permissions your facebook app needs from the user
    const permissions = ["public_profile", "email"];

		
        this.storage.get("facebook").then(data => {
            
              this.facebook.login(permissions)
              .then(response =>{
                let userId = response.authResponse.userID;
                console.log(userId);
                //Getting name and gender properties
                this.facebook.api("/me?fields=id,name,first_name,last_name,email", permissions)
                .then(user =>{
                  this.storage.set("pro", "pro").then(()=>{
                   this.pros();
                    loading.dismiss();
                  })
                  //this.services.singup().subscribe(res =>{

                 // })
                })
              }, error =>{
                console.log(error);
                loading.dismiss();
              });
            
          
          
        }, err =>{
          
        // this.storage.set("facebook", {id: "hola"})
        // this.router.navigate(["/user"]);
        });


  }

  async Login() {
    this.services.Login(this.email, this.password).subscribe(
      res => {
       if(res.user.confirmed == "0"){
         this.storage.set("token", {
          token: res.access_token,
          user: res.user.id
        }).then(()=>{
          this.router.navigate(["/code"]);
        })

        } else if(res.user.steps == "2"){
          this.storage.set("token", {
            token: res.access_token,
            user: res.user.id
          }).then(()=>{
            this.router.navigate(["/trades"]);
          })
        }else{
        this.storage.set("token", {
          token: res.access_token,
          user: res.user.id
        }).then(()=>{
          this.router.navigate(["/user/jobs"]);
          this.storage.set("validate", "si"); 
        })
      }
      },
      err => {
        this.presentToast();
        console.log("E-mail and/or password is incorrect");
      }
    );
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message:
        "Cordova is not available on desktop. Please try this in a real device or in an emulator.",
      buttons: ["OK"]
    });

    await alert.present();
  }
  async presentLoading(loading) {
    return await loading.present();
  }
  changeLanguage() {
    let a = this.lan;
    this.language = a;
    if (a === "es") {
      fetch("../../../assets/language.json")
        .then(res => res.json())
        .then(json => {
          this.language = json.es[0].login[0];
          //this.message = json.es[0].message[0];
        });
      this.storage.set("language", "es").then(res => {
        this.title = "Español";
        location.reload();
      });
    }
    if (a === "en") {
      fetch("../../../assets/language.json")
        .then(res => res.json())
        .then(json => {
          this.language = json.en[0].login[0];

          // this.message = json.en[0].message[0];
        });
      this.storage.set("language", "en").then(res => {
        this.title = "English";
        location.reload();
      });
    }
  }
  signup() {
    this.router.navigate(["/signup"]);
  }
  ionViewWillEnter() {
    this.menu.enable(false, "first");
    this.storage.keys().then(
      data => {
        if (data.length == 0) {
          this.storage.set("language", "en").then(res => {
            fetch("../../../assets/language.json")
              .then(res => res.json())
              .then(json => {
                this.language = json.en[0].login[0];
                location.reload();
              });
          });
        } else {
          this.storage.get("language").then(res => {
            if (res == "en") {
              let la = "json.en[0];";
              fetch("../../../assets/language.json")
                .then(res => res.json())
                .then(json => {
                  this.language = json.en[0].login[0];
                });
            }
            if (res == "es") {
              fetch("../../../assets/language.json")
                .then(res => res.json())
                .then(json => {
                  this.language = json.es[0].login[0];
                });
            }
          });
        }
      },
      error => {
        alert("no");
      }
    );
    this.storage.get("validate").then(res =>{
      if(res == null){
        this.router.navigate(["/home"]);
        
      }else{
        /*
        if(res == "no"){
          this.router.navigate(["/code"]);
        }if(res == "co"){
          this.router.navigate(["/trades"]);
        } */
        if (res == "si") this.router.navigate(["/user/jobs"]);
      }
    }, error =>{
      this.router.navigate(["/home"]);
    })
  }
  test() {
    //this.router.navigate(["/test"]);
    this.router.navigate(["/trades"]);
  }
  async presentToastError() {
    const toast = await this.toastController.create({
      position: "top",
      message: "The email has already been taken.",
      duration: 2000
    });
    toast.present();
  }
  async pros() {
    const toast = await this.toastController.create({
      position: "top",
      message: "in process",
      duration: 2000
    });
    toast.present();
  }
  passwordf(){
    this.router.navigate(["/password"]);
  }
  viewPassword(){
    if(this.valor == 0){
      this.passwords = "text";
      this.valor = 1;
    }else{
      this.passwords = "password";
      this.valor = 0;
    }
  }
}
