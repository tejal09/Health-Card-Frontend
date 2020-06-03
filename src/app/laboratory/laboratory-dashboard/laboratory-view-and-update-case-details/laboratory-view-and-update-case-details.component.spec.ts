import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryViewAndUpdateCaseDetailsComponent } from './laboratory-view-and-update-case-details.component';

describe('LaboratoryViewAndUpdateCaseDetailsComponent', () => {
  let component: LaboratoryViewAndUpdateCaseDetailsComponent;
  let fixture: ComponentFixture<LaboratoryViewAndUpdateCaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryViewAndUpdateCaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryViewAndUpdateCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
