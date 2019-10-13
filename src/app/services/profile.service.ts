import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Profile } from '../models/Profile';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin':'*'
  })
} 

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  profileUrl:string = 'http://apex-tracker.tech/api/'
  platform:string;
  gamertag:string;

  constructor(private http:HttpClient) { }

  getProfile(platform, gamertag):Observable<Profile> {
    return this.http.get<Profile>(`${this.profileUrl}${platform}/${gamertag}`, httpOptions);
  }

}
