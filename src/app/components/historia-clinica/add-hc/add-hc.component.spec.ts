import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHcComponent } from './add-hc.component';

describe('AddHcComponent', () => {
  let component: AddHcComponent;
  let fixture: ComponentFixture<AddHcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
