import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessNestComponent } from './success-nest.component';

describe('SuccessNestComponent', () => {
  let component: SuccessNestComponent;
  let fixture: ComponentFixture<SuccessNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessNestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
