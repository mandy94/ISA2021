import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDetailsDialogComponent } from './pharmacy-details-dialog.component';

describe('PharmacyDetailsDialogComponent', () => {
  let component: PharmacyDetailsDialogComponent;
  let fixture: ComponentFixture<PharmacyDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
