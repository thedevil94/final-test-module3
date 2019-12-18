import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomesListComponent } from './awesomes-list.component';

describe('AwesomesListComponent', () => {
  let component: AwesomesListComponent;
  let fixture: ComponentFixture<AwesomesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
