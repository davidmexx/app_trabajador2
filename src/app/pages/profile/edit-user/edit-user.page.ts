import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TestingService } from '../../../services/testing.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  constructor(
    private storage: Storage, 
    private services: TestingService, 
    private loadingController: LoadingController, 
    private router: Router, 
    private activateRouter: ActivatedRoute, 
    public toastController: ToastController, private nav : NavController) { }
  user: any = [];
  name: string;
  last: string;
  email: string;
  phone: string;
  token: string;
  id: number;
  hola: string;
  page1 = false;
  page2 = false;
  page3 = false;
  newAdrres: any =  [];
  address: string;
  city: string;
  estate: string; 
  zipcode: string;
  newDays: any = [];
  newTrasnport: any = [];
  temporal = [];
  daysS: string;
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.newAdrres = [];
    this.newDays = [];
    this.newTrasnport = [];
    if(this.activateRouter.snapshot.paramMap.get("id") == "1"){
      //console.log("hola")
      this.page1 = true;
    }
    if(this.activateRouter.snapshot.paramMap.get("id") == "2"){
      this.page2 = true;
    }
    if(this.activateRouter.snapshot.paramMap.get("id") == "3"){
      this.page3 = true;
    }
    //console.log();
    this.storage.get("token").then(res =>{
      this.getUser(res.token, res.user);
      this.token = res.token;
      this.id = res.user;
    })
    this.getdays();
    this.getTransport();
    
    
  }
  async getUser(token, id){
    const loading = await this.loadingController.create({
      message: ''
    });
    this.presentLoading(loading);
    await this.services.getUser(token, id).subscribe(res =>{
      this.name = res.data.first_name;
      this.last = res.data.last_name;
      this.email = res.data.email;
      this.phone = res.data.phone_number;
      if(res.data.address == null){
        loading.dismiss();
      }else{
      this.separator(res.data.address);
      loading.dismiss();
      }
    })
  }
  async presentLoading(loading) {
		return await loading.present();
  }
  save(){
    let data = {
      first_name: this.name,
      last_name: this.last,
      email: this.email,
      phone_number: this.phone,
      id: this.id,
      address: `${this.address}|${this.city}|${this.estate}|${this.zipcode}|`
    }
    this.services.editUser(data, this.token).subscribe(res =>{  
      if(res.type == "success"){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000

        })
        Toast.fire({
          type: 'success',
          title: 'Profile update successfully'
        }).then((resu) =>{
          if(resu.dismiss === Swal.DismissReason.timer){
              this.router.navigate(["/user/user"]);
             
              //this.storage.set("validate", "si"); 
          }
        })
      }
    })
  }
  separator(string){
    //let cadena= "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
    let res = string.split("|");
    res.length = res.length -1;
    this.newAdrres.push(...res)
    //this.days.length = this.days.length -1;
    this.address = this.newAdrres[0];
    this.city = this.newAdrres[1];
    this.estate = this.newAdrres[2];
    this.zipcode = this.newAdrres[3];
    //console.log(this.address);
  }
  back(){
    this.router.navigate(["/user/user"]);
  }
  getdays(){
    this.newDays =[];
    let a;
    this.storage.get("days").then(res =>{
       this.newDays = res;
       console.log(this.newDays)
    }) 
  }
  getTransport(){
    this.storage.get("transport").then(res =>{
      this.newTrasnport = res;
      console.log(this.newTrasnport)
   }) 
  }
  saveDays(){
    //console.log(this.newDays);
    this.dias();
    this.saveTradesDays();
  }
  dias(){
    this.temporal = [];
    for(let i = 0; i < this.newDays.length; i++ ){
      if(this.newDays[i].isChecked == true){
        this.temporal.push(`${this.newDays[i].name}|`);
      }
    }
      //console.log(this.temporal);
      //console.log(this.temporal.join(''));
      //convertir array en string
      this.daysS = this.temporal.join('');
    console.log(this.daysS);
  }
  async saveTradesDays(){
    let data = {
      id: this.id,
      working_days: this.daysS
    }
   await this.services.addTradeWorkinDays(data, this.token).subscribe(res =>{
      if(res.type == "success"){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000

        })
        Toast.fire({
          type: 'success',
          title: 'Availability update successfully'
        }).then((resu) =>{
          if(resu.dismiss === Swal.DismissReason.timer){
            this.storage.remove("days")
              //this.router.navigate(["/user/user/"]);
              //this.nav.navigateRoot("/user/user"); 
             // this.nav.navigateForward("/user/user");
              //this.router.navigateByUrl("/user/user");
              //this.nav.navigateRoot(["/user/user"]);
              this.nav.pop();
              //this.storage.set("validate", "si"); 
          }
        })
      }
    })
  }
  saveTransport(){
    if(this.newTrasnport[0].isChecked == true && this.newTrasnport[1].isChecked){
      this.presentToast("Select one");
    }else{
    for(let i = 0; i < this.newTrasnport.length; i++){
      if(this.newTrasnport[i].isChecked == true){
        let data = {
          id: this.id,
          transport: this.newTrasnport[i].name
        }
        this.services.addTradesTransport(data, this.token).subscribe(res =>{
          if(res.type == "success"){
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
    
            })
            Toast.fire({
              type: 'success',
              title: 'Availability update successfully'
            }).then((resu) =>{
              if(resu.dismiss === Swal.DismissReason.timer){
                this.storage.remove("days")
                  this.router.navigate(["/user/user"]);
                  //this.storage.set("validate", "si"); 
              }
            })
          }
          //this.router.navigate(["/user"]);
        })
      }else{
        console.log(` no aceptado ${this.newTrasnport[i].name}`)
      }
    }    
  }
}


async presentToast(mensaje) {
  const toast = await this.toastController.create({
    message: `${mensaje}`,
    duration: 2000,
    position: 'top'
  });
  toast.present();
}
ionViewDidLeave(){
  this.services.getUser(this.token, this.id);
}
}
