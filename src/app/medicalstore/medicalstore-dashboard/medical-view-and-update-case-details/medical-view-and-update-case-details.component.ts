import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medical-view-and-update-case-details',
  templateUrl: './medical-view-and-update-case-details.component.html',
  styleUrls: ['./medical-view-and-update-case-details.component.css']
})
export class MedicalViewAndUpdateCaseDetailsComponent implements OnInit {

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