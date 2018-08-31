import { Component, OnInit, Input } from '@angular/core';
import { CollectAnswerListServiceService } from '../collect-answer-list-service.service';
import { Global, AnswerItem, ANSWER_LIST } from '../QuestionData';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input()question: string;
  @Input()questionNo: number;   
  answerList: Array<AnswerItem>;

  constructor(private collectAnswerListService: CollectAnswerListServiceService, private global:Global ) {
    
  }
  
  selectedAnswer(questionNo: number) {
    return this.collectAnswerListService.findAnswer(questionNo);
  }

  ngOnInit() {
    this.answerList = this.global.selectAnswerList();
  }

  onSelect(answer:AnswerItem, questionNo:number) {
    console.log(`choose answer ${answer.ItemNo} of question ${questionNo}`);

    this.collectAnswerListService.saveAnswer(questionNo, answer.ItemNo);
  }
}
