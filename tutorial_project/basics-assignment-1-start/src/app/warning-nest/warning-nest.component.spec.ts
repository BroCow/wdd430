import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningNestComponent } from './warning-nest.component';

describe('WarningNestComponent', () => {
  let component: WarningNestComponent;
  let fixture: ComponentFixture<WarningNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningNestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
