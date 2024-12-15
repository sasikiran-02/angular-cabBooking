import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCabsComponent } from './list-cabs.component';

describe('ListCabsComponent', () => {
  let component: ListCabsComponent;
  let fixture: ComponentFixture<ListCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
