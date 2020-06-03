import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalViewCasesComponent } from './medical-view-cases.component';

describe('MedicalViewCasesComponent', () => {
  let component: MedicalViewCasesComponent;
  let fixture: ComponentFixture<MedicalViewCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalViewCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalViewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
