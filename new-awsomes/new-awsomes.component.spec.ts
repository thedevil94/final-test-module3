import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAwsomesComponent } from './new-awsomes.component';

describe('NewAwsomesComponent', () => {
  let component: NewAwsomesComponent;
  let fixture: ComponentFixture<NewAwsomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAwsomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAwsomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
