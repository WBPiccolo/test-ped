import { Component, OnInit } from '@angular/core';
import { Lesson } from '../common/Lesson';
import { Avviso } from '../common/Avviso';
import { Article } from '../common/Article';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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

  formattedArticles = [];
  nextLessons: Lesson[] = [];
  pendingLessons: Lesson[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setIcona('home');
    this.nextLessons = this.lezioni.filter((lezione) => lezione.status === 'N');
    this.pendingLessons = this.lezioni.filter(
      (lezione) => lezione.status === 'P'
    );
    //4 articoli per pagina
    const magazinePages = Math.ceil(this.magazine.length / 4);
    for (let i = 0; i < magazinePages; i++) {}
  }

  setIcona(page: string) {}
}
