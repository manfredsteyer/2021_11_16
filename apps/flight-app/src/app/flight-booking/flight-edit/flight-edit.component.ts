import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { ComponentWithExitWarning } from '../../shared/exit/exit.guard';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, ComponentWithExitWarning {
  id: string;
  showDetails: string;
  showWarning = false;
  observer: Observer<boolean>;

  constructor(private route: ActivatedRoute) {
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.observer.next(decision);
    this.observer.complete();
  }

  canExit(): Observable<boolean> {
    // (Material)Dialog
    this.showWarning = true;
    return new Observable((observer: Observer<boolean>) => {
      this.observer = observer;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

  deleteEntity(): void {
    console.log('Jetzt würde gelöscht werden, hätten Sie nicht nur eine Shareware-Version!');
  }

}
