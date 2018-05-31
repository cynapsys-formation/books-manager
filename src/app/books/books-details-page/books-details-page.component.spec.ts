import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDetailsPageComponent } from './books-details-page.component';

describe('BooksDetailsPageComponent', () => {
  let component: BooksDetailsPageComponent;
  let fixture: ComponentFixture<BooksDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
