import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { BaseFooterComponent } from '../base-footer/base-footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AppComponent', () => {

  let fixture = null;
  let component: AppComponent = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent,
        MenuComponent,
        BaseFooterComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'movies'`, () => {
    expect(component.title).toEqual('movies');
  });

  // xit wyłącza test
  // fit odpala tylko te testy
  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Movies');
  });
});
