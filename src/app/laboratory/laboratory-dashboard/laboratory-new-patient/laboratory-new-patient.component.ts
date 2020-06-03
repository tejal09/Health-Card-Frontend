import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory-new-patient',
  templateUrl: './laboratory-new-patient.component.html',
  styleUrls: ['./laboratory-new-patient.component.css']
})
export class LaboratoryNewPatientComponent implements OnInit {

  patientID:'';

  constructor( private router:Router) { }

  FindPatient(){
    this.router.navigateByUrl('/clinic/new-patient')
  }


  ngOnInit(): void {
  }

}
