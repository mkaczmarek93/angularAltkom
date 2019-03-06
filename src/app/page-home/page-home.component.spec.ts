import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeComponent } from './page-home.component';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    console.log('create component')
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()=> {
    fixture.debugElement.nativeElement.remove()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should app simple numbers', () => {
    expect(component.addNumbers(2,2)).toEqual(4);
    expect(component.addNumbers(2,-2)).toEqual(0);
    expect(component.addNumbers(-2,-2)).toEqual(-4);
    expect(component.addNumbers(0,0)).toEqual(0);
    expect(component.addNumbers(24,18)).toEqual(42);
    expect(component.addNumbers("michal", "kaczmarek")).toEqual(null);

    // Happy path | Happy flow
    // Edge case | Corner case
    // Falsy values: null, false, 0, undefined, '', NaN, Symbol
  })
});
