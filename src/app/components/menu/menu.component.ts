import { Component, OnInit, Input } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  language = {};

  constructor(
    private menu: MenuController,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {
    this.storage.get("language").then(data => {
      if (data === "en") {
        fetch("../../../assets/language.json")
          .then(res => res.json())
          .then(json => {
            this.language = json.en[0].menu[0];
            console.log(this.language);
          });
      }
      if (data === "es") {
        fetch("../../../assets/language.json")
          .then(res => res.json())
          .then(json => {
            this.language = json.es[0].menu[0];
            console.log(this.language);
          });
      }
    });
  }
  projects() {
    this.router.navigate(["./projects"]);
    this.menu.close("first");
    // alert("hola");
  }
  notifications() {
    this.router.navigate(["./notifications"]);
    this.menu.close("first");
  }
  home(){
    this.router.navigate(["./user"]);
    this.menu.close("first");
  }
  back(){
    this.router.navigate(["./home"]);
    this.menu.close("first");
    this.storage.remove("validate");
  }
  profile(){
    this.router.navigate(["./profile"]);
    this.menu.close("first");
  }
  message(){
    this.router.navigate(["./messages"]);
    this.menu.close("first");
  }
}
