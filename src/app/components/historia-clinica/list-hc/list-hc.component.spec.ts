import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHcComponent } from './list-hc.component';

describe('ListHcComponent', () => {
  let component: ListHcComponent;
  let fixture: ComponentFixture<ListHcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
