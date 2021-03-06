import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageUserLogoutComponent } from './page-user-logout.component';

describe('PageUserLogoutComponent', () => {
  let component: PageUserLogoutComponent;
  let fixture: ComponentFixture<PageUserLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         PageUserLogoutComponent
         ],
         imports: [
           RouterTestingModule
         ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserLogoutComponent);
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
