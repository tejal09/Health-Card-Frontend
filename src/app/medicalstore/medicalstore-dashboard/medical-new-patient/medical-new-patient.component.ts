import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-new-patient',
  templateUrl: './medical-new-patient.component.html',
  styleUrls: ['./medical-new-patient.component.css']
})
export class MedicalNewPatientComponent implements OnInit {
  patientID:'';

  constructor( private router:Router) { }

  FindPatient(){
    this.router.navigateByUrl('/medical/new-patient')
  }


  ngOnInit(): void {
  }

}
