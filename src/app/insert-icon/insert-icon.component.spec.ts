import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertIconComponent } from './insert-icon.component';

describe('InsertIconComponent', () => {
  let component: InsertIconComponent;
  let fixture: ComponentFixture<InsertIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
