import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartDeleteComponent } from './depart-delete.component';

describe('DepartDeleteComponent', () => {
  let component: DepartDeleteComponent;
  let fixture: ComponentFixture<DepartDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
