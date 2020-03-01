import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ProfileResponse } from "../models/ProfileResponse";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  profileUrl: string = "http://apex-tracker.tech/api/";
  platform: string;
  gamertag: string;

  constructor(private http: HttpClient) {}

  getProfile(platform, gamertag): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(
      `${this.profileUrl}${platform}/${gamertag}`,
      httpOptions
    );
  }
}
