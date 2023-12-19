import { Injectable } from '@angular/core';
import {Program} from "../../models/programs/program.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private urlactivities = `http://localhost:8090/ms-soa`;
  funcionarySelected: Program | undefined = undefined;
  httpOption={
    headers:new HttpHeaders({
      'Content-Type':'aplication/json',
      'Authorization':`Bearer ${environment.token}`
    })
  };
  constructor(private _http: HttpClient) {}

  findAll() {
    return this._http.get(this.urlactivities + '/listData',this.httpOption);
  }

  findAllDataActive() {
    return this._http.get(this.urlactivities + '/listData/active',this.httpOption);
  }


}
