import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '../common/Lesson';

@Component({
  selector: 'activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.css']
})
export class ActivityContainerComponent implements OnInit {

  @Input() lesson: Lesson | undefined;
  
  constructor() { }

  ngOnInit(): void {
      console.log(this.lesson);
  }

}
