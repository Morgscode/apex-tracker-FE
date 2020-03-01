import { Component, OnInit } from "@angular/core";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(SearchComponent.searchResult.data);
  }
}
