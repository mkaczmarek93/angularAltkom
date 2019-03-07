import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserRegisterComponent } from './page-user-register.component';

describe('PageUserRegisterComponent', () => {
  let component: PageUserRegisterComponent;
  let fixture: ComponentFixture<PageUserRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
