import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicalstore-dashboard',
  templateUrl: './medicalstore-dashboard.component.html',
  styleUrls: ['./medicalstore-dashboard.component.css']
})
export class MedicalstoreDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  FindPatient(){
    this.router.navigateByUrl('/medical/new-patient')
  }
  ngOnInit(): void {
  }

}
