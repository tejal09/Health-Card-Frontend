import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LaboratoryFile } from './laboratoryFile';

@Component({
  selector: 'app-laboratory-view-and-update-case-details',
  templateUrl: './laboratory-view-and-update-case-details.component.html',
  styleUrls: ['./laboratory-view-and-update-case-details.component.css']
})
export class LaboratoryViewAndUpdateCaseDetailsComponent implements OnInit {
  caseID:string
  caseDetails: any
  details;

 

  constructor(public fb:FormBuilder, private httpClient: HttpClient, private route: ActivatedRoute, private router:Router)  { 
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

  PatientUploadLabReport = this.fb.group({
    patient_lab_report: [''],
   });

   selectFile(event) {
    const patient_lab_report = (event.target as HTMLInputElement).files[0];
    console.log(patient_lab_report);
    this.PatientUploadLabReport.get('patient_lab_report').patchValue(patient_lab_report);
    this.PatientUploadLabReport.updateValueAndValidity();
    console.log(this.PatientUploadLabReport.value);
  }


    getCaseDetails(){
      this.httpClient.get(`http://127.0.0.1:5000/api/user/cases/case-details/${this.caseID}`).subscribe(response => {
        this.caseDetails = response;
      console.log(this.caseDetails);
      console.log(response)
    });
  }

  NewPatientUploadLabReport : LaboratoryFile

onSubmit(){
this.NewPatientUploadLabReport = this.PatientUploadLabReport.value;

const formData = new FormData;
for (const [key, value] of Object.entries(this.NewPatientUploadLabReport)) {
  formData.append(key, value);
}
this.httpClient.post(`http://127.0.0.1:5000/api/user/cases/upload/${this.caseID}`,formData)
.subscribe(
  () =>{
    this.router.navigateByUrl('/laboratory/dashboard')
    console.log(this.NewPatientUploadLabReport)
  },
  err =>{
    console.log(err);

  }
)
      
      }
}