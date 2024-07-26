import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentDetailsComponent } from './create-student-details.component';

describe('CreateStudentDetailsComponent', () => {
  let component: CreateStudentDetailsComponent;
  let fixture: ComponentFixture<CreateStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
