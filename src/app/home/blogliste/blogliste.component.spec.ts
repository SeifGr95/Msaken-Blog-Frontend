import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglisteComponent } from './blogliste.component';

describe('BloglisteComponent', () => {
  let component: BloglisteComponent;
  let fixture: ComponentFixture<BloglisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloglisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
