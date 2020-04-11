import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetoneComponent } from './getone.component';

describe('GetoneComponent', () => {
  let component: GetoneComponent;
  let fixture: ComponentFixture<GetoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
