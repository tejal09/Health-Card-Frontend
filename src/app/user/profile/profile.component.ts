import { Component, OnInit } from '@angular/core';
import { UserDetails, AuthenticationService } from '../../authentication.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails
  user_id:string


  constructor(private auth:AuthenticationService, private router:Router , private route:ActivatedRoute) { 
  //   this.route.paramMap.subscribe((parameter: ParamMap) => {
  //     if (parameter.has('user_id')) {
  //       this.user_id = parameter.get('user_id');
  //       console.log(this.user_id);
  //     }
  //   })
   }
  

  ngOnInit(){
    this.details = this.auth.getUserDetails();
  
    console.log(this.details._id)
  }

  ViewCases(){
    this.user_id = this.details.identity.user_id;
    console.log(this.user_id)

    this.router.navigateByUrl(`user/profile/case-list/${this.user_id}`)
  }

}

