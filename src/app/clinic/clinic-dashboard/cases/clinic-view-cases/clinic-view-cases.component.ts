import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CaseDetails } from 'src/app/doctor/doctor-dashboard/cases/doctor-case-details/CaseDetails';

@Component({
  selector: 'app-view-cases',
  templateUrl: './clinic-view-cases.component.html',
  styleUrls: ['./clinic-view-cases.component.css']
})
export class ClinicViewCasesComponent implements OnInit {
  cases;
  searchText= this.cases
  // viewCases: cases
  patientID:string
  // case_name:any

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router:Router)  { 
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('patientID')) {
        this.patientID = parameter.get('patientID');
        // console.log(this.patientID);
      }
    })
   }


  
  
  ngOnInit() {

    this.httpClient.get(`http://127.0.0.1:5000/api/user/cases/${this.patientID}`).subscribe(cases =>(this.cases = cases))
    console.log(this.cases);

  }
  

 
}

