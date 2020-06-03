import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryViewCasesComponent } from './laboratory-view-cases.component';

describe('LaboratoryViewCasesComponent', () => {
  let component: LaboratoryViewCasesComponent;
  let fixture: ComponentFixture<LaboratoryViewCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryViewCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryViewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
