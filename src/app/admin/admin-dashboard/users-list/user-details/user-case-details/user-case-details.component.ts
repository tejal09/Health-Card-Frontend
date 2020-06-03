import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-case-details',
  templateUrl: './user-case-details.component.html',
  styleUrls: ['./user-case-details.component.css']
})
export class UserCaseDetailsComponent implements OnInit {

  case_id:string
  caseDetails: any
  details;

 

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router:Router)  { 
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('case_id')) {
        this.case_id = parameter.get('case_id');
        // console.log(this.patientID);
      }
    })
   }


  ngOnInit() {
    this.getCaseDetails();


  }

  getCaseDetails(){


    this.httpClient.get(`http://127.0.0.1:5000/api/user/cases/case-details/${this.case_id}`).subscribe(response => {
      this.caseDetails = response;
    console.log(this.caseDetails);
    console.log(response)
  });
}
}
