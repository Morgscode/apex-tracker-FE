import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // grab document.body class list
  bodyClasses = document.body.classList;

  constructor() {}

  ngOnInit() {
    // remove bg image
    if (this.bodyClasses.contains("body-bg-image")) {
      this.bodyClasses.remove("body-bg-image");
    }
  }
}
