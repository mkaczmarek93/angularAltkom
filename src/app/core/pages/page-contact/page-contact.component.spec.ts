import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactComponent } from './page-contact.component';

describe('PageContactComponent', () => {
  let component: PageContactComponent;
  let fixture: ComponentFixture<PageContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactComponent);
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
