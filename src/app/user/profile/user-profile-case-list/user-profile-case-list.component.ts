import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-profile-case-list',
  templateUrl: './user-profile-case-list.component.html',
  styleUrls: ['./user-profile-case-list.component.css']
})
export class UserProfileCaseListComponent implements OnInit {
  
  cases;
  searchText= this.cases
  // viewCases: cases
  user_id:string
  // case_name:any
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router:Router)  { 
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      if (parameter.has('user_id')) {
        this.user_id = parameter.get('user_id');
        // console.log(this.patientID);
      }
    })
   }



   ngOnInit() {

    this.httpClient.get(`http://127.0.0.1:5000/api/user/cases/${this.user_id}`).subscribe(cases =>(this.cases = cases))
    console.log(this.cases);

  }
  

}
