import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryNewPatientComponent } from './laboratory-new-patient.component';

describe('LaboratoryNewPatientComponent', () => {
  let component: LaboratoryNewPatientComponent;
  let fixture: ComponentFixture<LaboratoryNewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryNewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryNewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
