import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalViewAndUpdateCaseDetailsComponent } from './medical-view-and-update-case-details.component';

describe('MedicalViewAndUpdateCaseDetailsComponent', () => {
  let component: MedicalViewAndUpdateCaseDetailsComponent;
  let fixture: ComponentFixture<MedicalViewAndUpdateCaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalViewAndUpdateCaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalViewAndUpdateCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
