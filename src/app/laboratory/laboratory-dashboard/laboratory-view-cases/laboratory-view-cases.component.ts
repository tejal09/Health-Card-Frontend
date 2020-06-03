import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-laboratory-view-cases',
  templateUrl: './laboratory-view-cases.component.html',
  styleUrls: ['./laboratory-view-cases.component.css']
})
export class LaboratoryViewCasesComponent implements OnInit {

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

