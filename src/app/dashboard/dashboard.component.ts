import { Component, OnInit } from '@angular/core';
import { Lesson } from '../common/Lesson';
import { ActivityContainerComponent } from '../activity-container/activity-container.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lezioni: Lesson[] = [
    {name: 'Postural Training', time: new Date(), length: 30, clubName: 'Ravizza', salaName: 'Conscious', status:'N', peopleInQueue: 0, img: '../../assets/postural-training.png'},
    {name: 'Postural Training', time: new Date(), length: 30, clubName: 'Ravizza', salaName: 'Conscious', status:'N', peopleInQueue: 0, img: '../../assets/postural-training.png'},
    {name: 'Postural Training', time: new Date(), length: 30, clubName: 'Ravizza', salaName: 'Conscious', status:'P', peopleInQueue: 2, img: '../../assets/postural-training.png'},
  ];

  nextLessons: Lesson[] = [];
  pendingLessons: Lesson[] = [];

  constructor() { }

  ngOnInit(): void {
    this.nextLessons = this.lezioni.filter(lezione => lezione.status === 'N');
    this.pendingLessons = this.lezioni.filter(lezione => lezione.status === 'P');
  }

}
