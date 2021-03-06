import {Directive, ElementRef, Injector, Input} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
  selector: 'legacy-name-output'
})
export class LegacyNameOutputComponentWrapper extends UpgradeComponent {

  @Input()
  public firstname: string;

  @Input()
  public lastname: string;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('legacyNameOutputComponent', elementRef, injector);
  }
}
