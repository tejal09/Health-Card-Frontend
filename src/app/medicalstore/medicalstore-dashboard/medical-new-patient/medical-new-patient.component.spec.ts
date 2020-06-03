import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalNewPatientComponent } from './medical-new-patient.component';

describe('MedicalNewPatientComponent', () => {
  let component: MedicalNewPatientComponent;
  let fixture: ComponentFixture<MedicalNewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalNewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalNewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
