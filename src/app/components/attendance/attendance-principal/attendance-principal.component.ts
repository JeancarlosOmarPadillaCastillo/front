import {Component, OnInit, ViewChild} from '@angular/core';
import { AttendanceService } from '../../component-funcionality/services/attendance/attendance.service';
import { Router } from '@angular/router';
import { Attendance } from '../../component-funcionality/models/attendance/attendance.model';
import { AttendancetransactionDataComplete } from '../../component-funcionality/models/attendance/transactionDataCompleteAttendance.model';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-attendance-principal',
  templateUrl: './attendance-principal.component.html',
  styleUrls: ['./attendance-principal.component.scss']
})
export class AttendancePrincipalComponent implements OnInit {
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    programData: any[] = [];
    asignationData: any[] = [];
    funcionaryColumns: string[] =
      [ 'idprogram',
        'dataActivies',
        'dataActivies2',
        'dataActivies3',
        'dniActivies',
        'dataTeen',
        'dniTeen',
        'dataAttendance',
        'actions'];
  
    dataSource = new MatTableDataSource(this.asignationData);
  
    constructor(private asignationService: AttendanceService,
                private router: Router) {
    }
  
    ngOnInit(): void {
      this.findAllDataActive();
      this.findAllDataUbigeo();
    }
  
    navigateToForm() {
      this.router.navigate(['asignation-form']).then(() => {
        //console.log('Se está redirigiendo al formulario de registro.')
      })
    }
  
    // Función para traducir "A" a "Asistió" y "I" a "No asistió"
    getAttendanceStatusText(attendanceStatus: string): string {
    return attendanceStatus === 'A' ? 'Asistió' : 'No asistió';
    } 

  
    findAllDataAsignation() {
      this.asignationService.findAll().subscribe((dataAsignation: any) => {
        console.log('Datos de la asignación: ', dataAsignation);
        //this.asignationData = dataAsignation; => No hace el filtrado por datos activos.
      })
    }
  
    findAllDataActive() {
      this.asignationService.findAllDataActive().subscribe((dataAsignationActive: any) => {
        console.log('Datos de la asignación en modo Activo: ', dataAsignationActive);
        this.asignationData = dataAsignationActive;
        this.dataSource = new MatTableDataSource(this.asignationData);
        this.dataSource.paginator = this.paginator;
      })
    }
  
    updateDataAsignation(attendance: Attendance) {
      this.asignationService.asignationSelected = attendance;
      this.navigateToForm();
      this.findAllDataAsignation();
    }
  
    updateTwoWayDataAsignation(twoWayAsignation: AttendancetransactionDataComplete) {
      this.asignationService.transactionSelected = twoWayAsignation;
      this.navigateToForm();
      this.findAllDataAsignation();
    }
  
    deleteLogical(attendance: Attendance) {
      this.asignationService.deleteLogicalDataAsignation(attendance).subscribe((dataDeleteLogical) => {
        console.log('Se esta eliminando el dato de: ', dataDeleteLogical);
        this.findAllDataActive();
      })
    }
  
    deleteDataCompleteAsignation(attendance: Attendance) {
      this.asignationService.deleteDataAsignationComplete(attendance).subscribe((dataDeleteCompleteAsignation) => {
        console.log('El dato eliminado es: ', dataDeleteCompleteAsignation);
        this.findAllDataActive();
      })
    }


    findAllDataUbigeo() {
      this.asignationService
        .findAllDataUbigeoAddress()
        .subscribe((dataUbigeo: any) => {
          console.log('Ubigeo Data: ', dataUbigeo); // Running successfully
          this.programData = dataUbigeo;
        });
    }
  

  
    getDataCompleteProgramById(idProgram: number) {
      // Find the program object in the programData array where id_program matches
      const program = this.programData.find((item) => item.id_program === idProgram);
    
      // Check if the program is found
      if (program) {
        // Concatenate relevant information and return the result
        return `${program.name}`;
      } else {
        // Return a message if the program is not found
        return 'Programa no encontrado.'; // Program not found.
      }
    }
    

  }
  