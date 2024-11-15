import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourrighttoknowComponent } from './yourrighttoknow.component';

describe('YourrighttoknowComponent', () => {
  let component: YourrighttoknowComponent;
  let fixture: ComponentFixture<YourrighttoknowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourrighttoknowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourrighttoknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
