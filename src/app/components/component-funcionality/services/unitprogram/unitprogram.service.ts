import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { unitprogram } from '../../models/unitprogram/unitprogram.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import { transactionDataCompleteoperationalprogramResponse } from '../../models/unitprogram/transactionDataComplete.model';
import {Teen} from "../../models/teen/teen.model";

@Injectable({
  providedIn: 'root',
})
export class unitprogramervice {
  private urlAsignation = `${environment.apiUrlActivitiesTeenager}/api/transaccionalData`;
  private urlteen = `${environment.apiUrlTeen}/api/teenData`;
  asignationSelected: unitprogram | undefined = undefined;
  transactionSelected: transactionDataCompleteoperationalprogramResponse | undefined = undefined;
  httpOption={
    headers:new HttpHeaders({
      'Content-Type':'aplication/json',
      'Authorization':`Bearer ${environment.token}`
    })
  };
  constructor(private _http: HttpClient) {}

  findAll() {
    return this._http.get(this.urlAsignation + '/listData',this.httpOption);
  }

  findAllDatosWithoutBody() {
    return this._http.get(this.urlAsignation + '/listDataIdRegister',this.httpOption);
  }

  findAllDataActive() {
    return this._http.get(this.urlAsignation + '/listData/active',this.httpOption);
  }

  findDataIdRegister() {
    return this._http.get(this.urlAsignation + '/listDataIdRegister',this.httpOption);
  }

  findDataTeenNoRegistered() {
    return this._http.get(this.urlAsignation + '/listData/active',this.httpOption);
  }

  findAllDataInactive() {
    return this._http.get(this.urlAsignation + '/listData/inactive',this.httpOption);
  }

  saveNewAsignation(asignation: unitprogram) {
    return this._http.post(this.urlAsignation, asignation);
  }

  updateDataAsignation(asignation: unitprogram) {
    return this._http.put(
      this.urlAsignation + '/' + asignation.id_activities,
      asignation
    );
  }

  updateTwoWayAsignation(twoWayAsignation: transactionDataCompleteoperationalprogramResponse) {
    return this._http.put(
      this.urlAsignation +
      '/' +
      twoWayAsignation.transaccionalActTeen.id_teenager,
      twoWayAsignation
    );
  }

  deleteLogicalDataAsignation(asignation: unitprogram) {
    return this._http.patch(
      this.urlAsignation + '/deleteLogical/' + asignation.id_activities,
      asignation
    );
  }

  reactiveLogicalDataAsignation(asignation: unitprogram) {
    return this._http.patch(
      this.urlAsignation + '/reactiveLogical/' + asignation.id_activities,
      asignation
    );
  }

  deleteDataAsignationComplete(asignation: unitprogram) {
    return this._http.delete(
      this.urlAsignation + '/' + asignation.id_activities,
    );
  }

  saveMasive(dto: any): Observable<void> {
    return this._http.post<void>(`${this.urlAsignation}/savemasivteen`, dto);
  }
  saveMasiveActivities(dto: any): Observable<void> {
    return this._http.post<void>(`${this.urlAsignation}/savet`, dto);
  }
  exportAsignationReport(dniteen: string): Observable<ArrayBuffer> {
    const url = `${this.urlAsignation}/report/${dniteen}`;
    return this._http.get(url, { responseType: 'arraybuffer' });
  }
}
