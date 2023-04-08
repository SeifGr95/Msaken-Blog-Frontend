import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivecyComponent } from './privecy.component';

describe('PrivecyComponent', () => {
  let component: PrivecyComponent;
  let fixture: ComponentFixture<PrivecyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivecyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivecyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
