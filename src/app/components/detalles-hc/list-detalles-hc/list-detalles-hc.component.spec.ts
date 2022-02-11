import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetallesHcComponent } from './list-detalles-hc.component';

describe('ListDetallesHcComponent', () => {
  let component: ListDetallesHcComponent;
  let fixture: ComponentFixture<ListDetallesHcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetallesHcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetallesHcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
