import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-case-details',
  templateUrl: './clinic-case-details.component.html',
  styleUrls: ['./clinic-case-details.component.css']
})
export class ClinicCaseDetailsComponent implements OnInit {

  caseID:string
  caseDetails: any
  details;

 

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router:Router)  { 
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('caseID')) {
        this.caseID = parameter.get('caseID');
        // console.log(this.patientID);
      }
    })
   }


  ngOnInit() {
    this.getCaseDetails();


  }

  getCaseDetails(){


    this.httpClient.get(`http://127.0.0.1:5000/api/user/cases/case-details/${this.caseID}`).subscribe(response => {
      this.caseDetails = response;
    console.log(this.caseDetails);
    console.log(response)
  });
}
}
