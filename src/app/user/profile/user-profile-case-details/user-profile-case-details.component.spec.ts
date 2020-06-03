import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileCaseDetailsComponent } from './user-profile-case-details.component';

describe('UserProfileCaseDetailsComponent', () => {
  let component: UserProfileCaseDetailsComponent;
  let fixture: ComponentFixture<UserProfileCaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileCaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
