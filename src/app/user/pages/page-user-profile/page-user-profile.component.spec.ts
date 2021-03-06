import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserProfileComponent } from './page-user-profile.component';

describe('PageUserProfileComponent', () => {
  let component: PageUserProfileComponent;
  let fixture: ComponentFixture<PageUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()=>{
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
