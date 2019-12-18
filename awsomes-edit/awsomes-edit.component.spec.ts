import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsomesEditComponent } from './awsomes-edit.component';

describe('AwsomesEditComponent', () => {
  let component: AwsomesEditComponent;
  let fixture: ComponentFixture<AwsomesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsomesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsomesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
