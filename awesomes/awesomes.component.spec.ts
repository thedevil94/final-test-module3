import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomesComponent } from './awesomes.component';

describe('AwesomesComponent', () => {
  let component: AwesomesComponent;
  let fixture: ComponentFixture<AwesomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
