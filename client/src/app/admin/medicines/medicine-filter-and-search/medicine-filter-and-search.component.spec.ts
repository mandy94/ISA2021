import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineFilterAndSearchComponent } from './medicine-filter-and-search.component';

describe('MedicineFilterAndSearchComponent', () => {
  let component: MedicineFilterAndSearchComponent;
  let fixture: ComponentFixture<MedicineFilterAndSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineFilterAndSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineFilterAndSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
