import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadDialogComponent } from './localidad-dialog.component';

describe('LocalidadDialogComponent', () => {
  let component: LocalidadDialogComponent;
  let fixture: ComponentFixture<LocalidadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
