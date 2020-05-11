import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeaderComponentComponent } from './add-header-component.component';

describe('AddHeaderComponentComponent', () => {
  let component: AddHeaderComponentComponent;
  let fixture: ComponentFixture<AddHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
