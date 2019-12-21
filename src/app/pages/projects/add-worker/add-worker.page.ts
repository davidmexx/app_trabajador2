import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-worker",
  templateUrl: "./add-worker.page.html",
  styleUrls: ["./add-worker.page.scss"]
})
export class AddWorkerPage implements OnInit {
  page1 = true;
  page2 = false;
  page3 = false;
  page4 = false;
  page5 = false;
  dat = true;
  date = false;
  noPage = 1;
  constructor() {}

  ngOnInit() {}

  nextPage() {
    this.noPage = this.noPage + 1;
    if (this.noPage == 2) {
      this.page1 = false;
      this.page2 = true;
    }
    if (this.noPage == 3) {
      this.page2 = false;
      this.page3 = true;
    }
    if (this.noPage == 4) {
      this.page3 = false;
      this.page4 = true;
    }
    if (this.noPage == 5) {
      this.page4 = false;
      this.page5 = true;
    }
  }
  dates() {
    this.dat = false;
    this.date = true;
  }
}
