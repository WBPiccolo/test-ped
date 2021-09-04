export class Avviso {
  title: string;
  text: string;
  moreUrl: string;
  date: Date;
  isUnread: boolean;

  constructor(
    title: string,
    text: string,
    moreUrl: string,
    date: Date,
    isUnread: boolean
  ) {
    this.title = title;
    this.text = text;
    this.moreUrl = moreUrl;
    this.date = date;
    this.isUnread = isUnread;
  }
}
