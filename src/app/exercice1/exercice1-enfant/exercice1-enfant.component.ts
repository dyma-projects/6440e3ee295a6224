import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public count: number = 0;
  @Output() private changeCount: EventEmitter<number> =
    new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  increment() {
    this.count++;
    this.changeCount.emit(this.count);
  }

  decrement() {
    this.count--;
    this.changeCount.emit(this.count);
  }
}
