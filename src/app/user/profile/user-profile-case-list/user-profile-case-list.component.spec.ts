import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileCaseListComponent } from './user-profile-case-list.component';

describe('UserProfileCaseListComponent', () => {
  let component: UserProfileCaseListComponent;
  let fixture: ComponentFixture<UserProfileCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
