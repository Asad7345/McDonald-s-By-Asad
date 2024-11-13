import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutourfoodComponent } from './aboutourfood.component';

describe('AboutourfoodComponent', () => {
  let component: AboutourfoodComponent;
  let fixture: ComponentFixture<AboutourfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutourfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutourfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
