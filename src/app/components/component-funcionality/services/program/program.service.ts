import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Program } from '../../models/programs/program.model';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  private urlFuncionary = `${environment.apiUrlHistorial}/api/transactionalDataSimple`;
  private urlAttendance = `${environment.apiUrlAttendance}/v1/attendance`;
  private urlTennager = `${environment.apiUrlTeen}/api/teenData`;
  private urlActivities = `${environment.apiUrlActivities}/ms-soa`;
  private urlPrograma = `${environment.apiUrlProgram}/v1/programs`;
  private urlFuncionarys = `${environment.apiUrlUbigeoFuncionary}/api/funcionaryData`;
  httpOption={
    headers:new HttpHeaders({
      'Content-Type':'aplication/json',
      'Authorization':`Bearer ${environment.token}`
    })
  };
  funcionarySelected: Program | undefined = undefined;

  constructor(private _http: HttpClient) {}

  findAll() {
    return this._http.get(`${this.urlFuncionary}/listData`,this.httpOption);
  }

  findAllDataActive() {
    return this._http.get(this.urlFuncionary + '/listData',this.httpOption);
  }

  findAllAttendance() {
    return this._http.get(`${this.urlAttendance}`,this.httpOption);
  }

  findAllActivities() {
    return this._http.get(`${this.urlActivities}/listData`,this.httpOption);
  }
  findAllPrograms() {
    return this._http.get(`${this.urlPrograma}/list`,this.httpOption);
  }
  findAllFuncionary() {
    return this._http.get(`${this.urlFuncionarys}/listData`,this.httpOption);
  }
  findAllTennager() {
    return this._http.get(`${this.urlTennager}/listData`,this.httpOption);
  }
  getActivitiesDataById(id: number) {
    return this._http.get(`${this.urlActivities}/${id}`,this.httpOption);
  }
}
