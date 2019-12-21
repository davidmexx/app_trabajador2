import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-user",
  templateUrl: "./user.page.html",
  styleUrls: ["./user.page.scss"]
})
export class UserPage {
  titulo = "Home";
  language = {};
  constructor(private storage: Storage) {}

  ionViewWillEnter() {
    this.storage.get("token").then(data => {
      console.log(data);
    });
    this.storage.get("language").then(res => {
      console.log(res);
    });
  }
}
