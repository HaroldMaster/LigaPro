import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() title = '4,790,000 kr';
  @Input() description = 'Great detached house with very good rental income. Large, sunny property of 2461m². Attractive location in Bergen West!';
  @Input() img = '';
  

  @Output() viewMore: EventEmitter<void> =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitViewMore(): void {
    this.viewMore.emit();
  }

}
