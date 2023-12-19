import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OperativeUnitService} from "../../component-funcionality/services/operativeUnit/operative-unit.service";
import {Router} from "@angular/router";
import {OperativeUnit} from "../../component-funcionality/models/operativeUnit/operativeUnit.model";

@Component({
  selector: 'app-operationalunit-form',
  templateUrl: './operationalunit-form.component.html',
  styleUrls: ['./operationalunit-form.component.scss']
})
export class OperationalunitFormComponent {

}
