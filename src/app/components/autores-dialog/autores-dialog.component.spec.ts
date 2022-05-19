import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresDialogComponent } from './autores-dialog.component';

describe('AutoresDialogComponent', () => {
  let component: AutoresDialogComponent;
  let fixture: ComponentFixture<AutoresDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
