import { Injectable } from '@angular/core';
import { Global, QUESTION_LIST} from './QuestionData';

@Injectable({
  providedIn: 'root'
})
export class CollectAnswerListServiceService {

  private map: { [questionNo: number]: number; } = { };
  constructor(private myGlobal:Global) { }

  public saveAnswer(questionNo:number, answerNo:number) {
    this.map[questionNo] = answerNo;
  }

  public findAnswer(questionNo:number) {
     return this.map[questionNo];
  }

  public get isCompleted() : boolean {
    return Object.keys(this.map).length == QUESTION_LIST.length;
  }

  public saveAnswerList() {
    for (const key in this.map) {
      console.log(`saving: answer of question ${key} is ${this.map[key]}`);
      // save all to database
    }
  }

  public progressInfo2(): string {
    if (Object.keys(this.map).length <= 0)
    {
      return "";
    }

    if (Object.keys(this.map).length == QUESTION_LIST.length) {
      return "completed";
    }
    else
    {
      return `${Object.keys(this.map).length} / ${ QUESTION_LIST.length }`;
    }
  }

  public progressInfo(): number {
    return Math.floor(Object.keys(this.map).length * 100 / QUESTION_LIST.length);
  }
}
