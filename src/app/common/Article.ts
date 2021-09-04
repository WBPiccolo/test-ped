export class Article {
  title: string;
  text: string;
  date: Date;
  thumbnail: string;
  link: string;

  constructor(
    title: string,
    text: string,
    date: Date,
    thumbnail: string,
    link: string
  ) {
    this.title = title;
    this.text = text;
    this.date = date;
    this.thumbnail = thumbnail;
    this.link = link;
  }
}
