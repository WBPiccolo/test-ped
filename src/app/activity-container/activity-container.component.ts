import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Lesson } from '../common/Lesson';

@Component({
  selector: 'activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.css'],
})
export class ActivityContainerComponent implements OnInit {
  @Input()
  lesson!: Lesson;

  constructor() {}

  ngOnInit(): void {}

  getFormattedDate(date: Date): string {
    const today = moment();
    const tomorrow = moment().add(1, 'days');
    if (moment(date).isSame(today, 'day')) {
      return 'Oggi';
    }
    if (moment(date).isSame(tomorrow, 'day')) {
      return 'Domani';
    }
    return moment(date).format('DD/MM');
  }

  getStartTime(date: Date): string {
    return moment(date).format('HH.mm');
  }

  getEndTime(date: Date, length: number): string {
    return moment(date).add(length, 'minutes').format('HH.mm');
  }
}
