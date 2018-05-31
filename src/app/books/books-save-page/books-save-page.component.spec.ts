import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSavePageComponent } from './books-save-page.component';

describe('BooksSavePageComponent', () => {
  let component: BooksSavePageComponent;
  let fixture: ComponentFixture<BooksSavePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSavePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
