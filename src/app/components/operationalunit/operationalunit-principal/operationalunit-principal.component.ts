import {Component, OnInit, ViewChild} from '@angular/core';
import {OperativeUnitService} from '../../component-funcionality/services/operativeUnit/operative-unit.service';
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {OperativeUnit} from "../../component-funcionality/models/operativeUnit/operativeUnit.model";
import {ActivitiesService} from "../../component-funcionality/services/activities/activities.service";

@Component({
  selector: 'app-operationalunit-principal',
  templateUrl: './operationalunit-principal.component.html',
  styleUrls: ['./operationalunit-principal.component.scss']
})
export class OperationalunitPrincipalComponent implements OnInit {



  constructor(public funcionaryService: ActivitiesService,
        private _router: Router) {
  }
  adolescentes: any[]=[];
  filtroActivo: string = "activos";


  ngOnInit(): void {
this.findAll();

  }

  findAll() {
    this.funcionaryService
      .findAll()
      .subscribe((res:any) => {
        console.log(res);
        this.adolescentes=res;
      });
  }




}
