import { Component, OnInit } from '@angular/core';
import { Lesson } from '../common/Lesson';
import { Avviso } from '../common/Avviso';
import { Article } from '../common/Article';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lezioni: Lesson[] = [
    {
      name: 'Postural Training',
      time: new Date(),
      length: 30,
      clubName: 'Ravizza',
      salaName: 'Conscious',
      status: 'N',
      peopleInQueue: 0,
      img: '../../assets/postural-training.png',
    },
    {
      name: 'Postural Training',
      time: new Date(),
      length: 30,
      clubName: 'Ravizza',
      salaName: 'Conscious',
      status: 'N',
      peopleInQueue: 0,
      img: '../../assets/postural-training.png',
    },
    {
      name: 'Postural Training',
      time: new Date(),
      length: 30,
      clubName: 'Ravizza',
      salaName: 'Conscious',
      status: 'P',
      peopleInQueue: 2,
      img: '../../assets/postural-training.png',
    },
  ];

  avvisi: Avviso[] = [
    {
      title: 'Chiusura straordinaria per vacanze di Natale',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      moreUrl: '',
      date: new Date(),
      isUnread: true,
    },
    {
      title: 'Chiusura straordinaria per vacanze di Natale',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      moreUrl: '',
      date: new Date(),
      isUnread: false,
    },
  ];

  magazine: Article[] = [
    {
      title: 'Gli eventi di dicembre e gennaio',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      link: '',
      date: new Date(),
      thumbnail: '../../assets/ski.jpg',
    },
    {
      title: 'Gli eventi di dicembre e gennaio',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      link: '',
      date: new Date(),
      thumbnail: '../../assets/ski.jpg',
    },
    {
      title: 'Gli eventi di dicembre e gennaio',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      link: '',
      date: new Date(),
      thumbnail: '../../assets/ski.jpg',
    },
    {
      title: 'Gli eventi di dicembre e gennaio',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      link: '',
      date: new Date(),
      thumbnail: '../../assets/ski.jpg',
    },
  ];

  formattedArticles: Article[] = [];
  nextLessons: Lesson[] = [];
  pendingLessons: Lesson[] = [];
  screenWidth: number = 0;
  screenHeight: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.setIcona('home');

    this.onResize();
  }

  setIcona(page: string) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.nextLessons = this.lezioni.filter((lezione) => lezione.status === 'N');
    this.pendingLessons = this.lezioni.filter(
      (lezione) => lezione.status === 'P'
    );
    this.formattedArticles = this.magazine;
    if (this.screenWidth <= 800) {
      this.nextLessons = [this.nextLessons[0]];
      this.pendingLessons = [this.pendingLessons[0]];
      this.formattedArticles = [this.formattedArticles[0]];
    }
  }
}
