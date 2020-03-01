import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { ProfileResponse } from "../../models/ProfileResponse";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Input() platform: string;
  @Input() gamertag: string;
  static searchResult: ProfileResponse;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    // add bg image to body
    document.body.classList.add("body-bg-image");
  }

  onSubmit() {
    //set parameters
    const platformParam = this.platform;
    const gamertagParam = this.gamertag;

    this.profileService
      // make request to slim api
      .getProfile(platformParam, gamertagParam)
      // subscribe to observable
      .subscribe(profileData => {
        SearchComponent.searchResult = profileData;
        // if results exist
        if (SearchComponent.searchResult) {
          // navigate to profile
          this.router.navigate(["/profile"]);
        } else {
          console.log("params not set");
        }
      });
  }
}
