import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishGradeComponent } from './wish-grade.component';

describe('WishGradeComponent', () => {
  let component: WishGradeComponent;
  let fixture: ComponentFixture<WishGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
