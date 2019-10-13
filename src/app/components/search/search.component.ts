import { Component, OnInit, Input} from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/Profile';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() platform:string;
  @Input() gamertag:string;
  profile:Profile;

  constructor(private profileService:ProfileService ) {
    console.log(profileService);
   }

  ngOnInit() {
  }

  onSubmit() {
    const platformParam = this.platform;
    const gamertagParam = this.gamertag;

    this.profileService.getProfile(platformParam, gamertagParam).subscribe(profileData => {
      this.profile = profileData;
      if (this.profile) {
        console.log(this.profile);
      } else {
        console.log('params not set');
      }
      
    });
  }
  
}
