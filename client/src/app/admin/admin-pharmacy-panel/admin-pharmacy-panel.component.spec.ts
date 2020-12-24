import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPharmacyPanelComponent } from './admin-pharmacy-panel.component';

describe('AdminPharmacyPanelComponent', () => {
  let component: AdminPharmacyPanelComponent;
  let fixture: ComponentFixture<AdminPharmacyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPharmacyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPharmacyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
