import { Component, OnInit } from "@angular/core";
import { SearchComponent } from "../search/search.component";
import { Profile } from "../../models/Profile";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  apexProfile: any;
  bodyClasses = document.body.classList;
  constructor(private router: Router) {}

  ngOnInit() {
    // remove body bg image
    if (this.bodyClasses.contains("body-bg-image")) {
      this.bodyClasses.remove("body-bg-image");
    }
    // if there is no search result
    if (!SearchComponent.searchResult) {
      //re route to search component
      this.router.navigate(["/search"]);
      // if profile response exists
    } else if (SearchComponent.searchResult.data) {
      //instantiate profile class
      this.apexProfile = new Profile();
      //build profile from response
      this.apexProfile.buildProfile(SearchComponent.searchResult.data);
    }
  }

  getBgImg() {
    let heroBg = {
      background: `rgba(33,33,33,.75),url(\'${this.apexProfile.imgUrl}\')`
    };
    return heroBg;
  }
}
