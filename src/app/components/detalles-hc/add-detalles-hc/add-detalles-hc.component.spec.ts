import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetallesHcComponent } from './add-detalles-hc.component';

describe('AddDetallesHcComponent', () => {
  let component: AddDetallesHcComponent;
  let fixture: ComponentFixture<AddDetallesHcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetallesHcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetallesHcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
