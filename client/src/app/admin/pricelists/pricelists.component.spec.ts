import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelistsComponent } from './pricelists.component';

describe('PricelistsComponent', () => {
  let component: PricelistsComponent;
  let fixture: ComponentFixture<PricelistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
