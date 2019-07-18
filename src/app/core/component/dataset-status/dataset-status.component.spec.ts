import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetStatusComponent } from './dataset-status.component';

describe('DatasetStatusComponent', () => {
  let component: DatasetStatusComponent;
  let fixture: ComponentFixture<DatasetStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
