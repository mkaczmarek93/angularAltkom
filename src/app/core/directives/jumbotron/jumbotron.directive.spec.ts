import { JumbotronDirective } from './jumbotron.directive';
import { ElementRef } from '@angular/core';

describe('JumbotronDirective', () => {

  it('should create an instance', () => {
    const directive = new JumbotronDirective(null);
    expect(directive).toBeTruthy();
  });

  it('css class have been added', () => {
    const elementify = {
      nativeElement: {
        classList: {
          add: () => { }
        }
      }
    }
    spyOn(elementify.nativeElement.classList, 'add')  // szpieg nasłuchujący wywołania metody
    const directive = new JumbotronDirective(<ElementRef>elementify);
    directive.ngOnInit();
    expect(elementify.nativeElement.classList.add).toHaveBeenCalled()
  });

});
