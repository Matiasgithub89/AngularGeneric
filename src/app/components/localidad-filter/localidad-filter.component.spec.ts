import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadFilterComponent } from './localidad-filter.component';

describe('LocalidadFilterComponent', () => {
  let component: LocalidadFilterComponent;
  let fixture: ComponentFixture<LocalidadFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
