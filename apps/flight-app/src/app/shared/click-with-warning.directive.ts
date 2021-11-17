import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: 'button[clickWithWarning]'
})
export class ClickWithWarningDirective {

  @Input() warning = 'Are you sure?';

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('clickWithWarning') clickEvent = new EventEmitter();

  @HostBinding('class')
  assignedClasses = 'btn btn-danger';

  @HostListener('click', ['$event'])
  click($event: MouseEvent): void {

    if ($event.shiftKey || confirm(this.warning)) {
      this.clickEvent.emit();
    }

  }


}
