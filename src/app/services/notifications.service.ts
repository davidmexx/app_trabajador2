import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload  } from '@ionic-native/onesignal/ngx';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  mensajes: OSNotificationPayload[] = [
    // {
    //   title: 'Titulo de la push',
    //   body: 'Este es el body de la push',
    //   date: new Date()
    // }
  ];

  userId: string;

  pushListener = new EventEmitter<OSNotificationPayload>();



  constructor( private oneSignal: OneSignal, private router : Router, private nav: NavController, private storage: Storage) {

  }

  

  async configuracionInicial() {

    this.oneSignal.startInit('cd4edb24-8d4f-4caa-b16b-ec35440f18c2', '183537520635');

    this.oneSignal.inFocusDisplaying( this.oneSignal.OSInFocusDisplayOption.Notification );

    this.oneSignal.handleNotificationReceived().subscribe( ( noti ) => {
    // do something when notification is received
    console.log('Notificación recibida', noti );
    this.notificacionRecibida( noti );
    //noti
    });

    this.oneSignal.handleNotificationOpened().subscribe( async( noti ) => {
      // do something when a notification is opened
      console.log('Notificación abierta', noti );
      await this.notificacionRecibida( noti.notification );
      //this.router.navigate(['/detail-project']);
      //let ruta = noti.notification.payload.additionalData.ruta;
      //this.router.navigate([`/user/user`]);
     
      //console.log("if no", noti.notification.payload.additionalData.request_id);
      if(noti.notification.payload.additionalData.params == "request"){
        this.storage.set("detail", {id: noti.notification.payload.additionalData.request_id,  enabled: false});
        this.router.navigate(["/user/detail"]);
      }else if(noti.notification.payload.additionalData.params == "acepted"){
        this.storage.set("detail", {id: noti.notification.payload.additionalData.request_id,  enabled: true});
        this.router.navigate(["/user/detail"]);
      }
      
      
    });


    // Obtener ID del suscriptor
    this.oneSignal.getIds().then( info => {
      this.userId = info.userId;
      this.storage.set("oneSignal", info.userId);
      console.log(this.userId);
    });

    this.oneSignal.endInit();

  }

  async getUserIdOneSignal() {
    console.log('Cargando userId');
    // Obtener ID del suscriptor
    const info = await this.oneSignal.getIds();
    this.userId = info.userId;
    return info.userId;
  }

  async notificacionRecibida( noti: OSNotification ) {

    

    const payload = noti.payload;

    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID );

    if ( existePush ) {
      return;
    }

    this.mensajes.unshift( payload );
    this.pushListener.emit( payload );

   // await this.guardarMensajes();

  }

}
