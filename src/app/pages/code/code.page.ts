import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MenuController } from "@ionic/angular";
import { Router } from "@angular/router";
import {TestingService} from "../../services/testing.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  language: any = [];
  code = "";
  isenabled = false;
  token: string;
  
  constructor(private storage: Storage, private menu: MenuController, private router: Router, private services: TestingService) { }
 
  ngOnInit() {
    this.isenabled = false;
  
    this.menu.enable(false, "first");
    this.storage.get("language").then(res => { 
      if (res === "es") {
        fetch("../../../assets/language.json")
          .then(res => res.json())
          .then(json => {
            this.language = json.es[0].confirmation[0];
            console.log(this.language);
          });
      }
      if (res === "en") {
        fetch("../../../assets/language.json")
          .then(res => res.json())
          .then(json => {
            this.language = json.en[0].confirmation[0];
            // this.error_messages = json.en[0].error_messages[0];
            //console.log(json.en[0].error_messages[0]);
          });
      }
      this.storage.get("token").then(res =>{
        this.token = res.token;
      })
    });
  }
  onVerifyChange(e) {
    if (this.code.length != 0) {
        this.isenabled = true;
    }
    else { 
        this.isenabled = false;
    }
  }
  checkIsEnabled() { 
    return !this.isenabled;
  }

  verifyCode(){
    this.storage.get("token").then(data =>{
      //let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM5MjU5OGRmZTVkMjQ0MTMyOTA4NDAzN2NhZTEwMTFjZTkzMWQ2ZjQ0NmZjNDI3NTQ4YzIzMWNiOWRiYmJjMDBjZDZmY2Y3NTJmNDI2MTA1In0.eyJhdWQiOiIxIiwianRpIjoiYzkyNTk4ZGZlNWQyNDQxMzI5MDg0MDM3Y2FlMTAxMWNlOTMxZDZmNDQ2ZmM0Mjc1NDhjMjMxY2I5ZGJiYmMwMGNkNmZjZjc1MmY0MjYxMDUiLCJpYXQiOjE1NzI2Mzk5MjUsIm5iZiI6MTU3MjYzOTkyNSwiZXhwIjoxNjA0MjYyMzI0LCJzdWIiOiIzMSIsInNjb3BlcyI6W119.o6m6T2CKBJfUz2CcG4sOtrkxF03zU-1FpSctVOlo3yGVp_Tmf5vZ3ys9fcozQiZUdo38fNR8_4IZ3uqelh_GTz-7U9CrXQ3nDvWxvrLPXnRB140lVBFhnqYl9Ak8p-nW6lOKvqRy11p2tVwS7DIYAVSUQ3w7dG_hKqJIfFTqjV_0_VERxIdc0osLL9GFENGGvdCZEgCfIL1DeShb6tESBIkgl3PuwujsjED9URblDsFY-HSJALTMpJIGnY9dVJEHqXLC00eANU0k1n1KQ_XN3MbVP6FGGDZAZAhlgspoHgtOCpjaJXeZVyzEjq3swyL_i0kvuIBXx6iukt8k80Lea62XxyChzA5_j-QbLkgqJ5Bm6nNXO6tXFg_bl9gnoqx36R0RHpRE9pz4CsJcynQAU9nMAR6ArF5oPL8vgMYOnMVJXsKqb8lajVbpJYb_mVsJmciIm--58dyJ6bRGK4BUhnZ7VzVr36GgwR1nCl81lFL30xOOz466Q8HzkwEIwXYXhfhf_6osJj2SN_WUK2QpHXAX2j78WrQnw3vUmHZroMhdVLdc1rt3jQYukyJ3-yjopVsI2YPK7wdrfp_LngkUmNH3kjfk1-NSVzllgkvb1bMGArwrebh1Ly5H5LRoSsMRTo-aPSzreh6zQPpl1ORNZeanC1Ki18ljvxT8RZz56rA";
        this.services.verifyCode(data.token, this.code).subscribe(re =>{
          //console.log(data.access_token)
          if(re.type == "success"){
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
    
            })
            Toast.fire({
              type: 'success',
              title: 'account verified'
            }).then((resu) =>{
              if(resu.dismiss === Swal.DismissReason.timer){
                  this.router.navigate(["/trades"]);
                  this.storage.set("validate", "co"); 
              }
            })
          }
        }, error =>{
          console.log(error) 
        })
      })
  }
  resenCode(){
    this.services.resenCode(this.token).subscribe(res =>{
      if(res.type == "success"){
        const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
    
       })
       Toast.fire({
              type: 'success',
              title: 'code sent successfully'
            }).then((resu) =>{
              if(resu.dismiss === Swal.DismissReason.timer){
              }
            })


      }
       
      //console.log("code sent successfully");
    })
  }
  
  

}
