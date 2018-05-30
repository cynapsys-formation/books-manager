
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CynNavComponent } from './cyn-nav.component';

describe('CynNavComponent', () => {
  let component: CynNavComponent;
  let fixture: ComponentFixture<CynNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CynNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CynNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
