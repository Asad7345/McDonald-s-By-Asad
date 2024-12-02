import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedVehicleDetailsComponent } from './selected-vehicle-details.component';

describe('SelectedVehicleDetailsComponent', () => {
  let component: SelectedVehicleDetailsComponent;
  let fixture: ComponentFixture<SelectedVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedVehicleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
