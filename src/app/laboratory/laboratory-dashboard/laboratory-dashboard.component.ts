import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory-dashboard',
  templateUrl: './laboratory-dashboard.component.html',
  styleUrls: ['./laboratory-dashboard.component.css']
})
export class LaboratoryDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  FindPatient(){
    this.router.navigateByUrl('/laboratory/new-patient')
  }
}
