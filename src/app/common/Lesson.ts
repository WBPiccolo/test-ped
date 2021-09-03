export class Lesson {
    name: string;
    time: Date;
    length: number;
    clubName: string;
    salaName: string;
    status: string;
    peopleInQueue: number;
    img: string;

    constructor(name: string, time: Date, length: number, clubName: string, salaName:string, status:string, peopleInQueue:number, img:string){
        this.name = name;
        this.time = time;
        this.length = length;
        this.clubName = clubName;
        this.salaName = salaName;
        this.status = status;
        this.peopleInQueue = peopleInQueue;
        this.img = img;
    }
}