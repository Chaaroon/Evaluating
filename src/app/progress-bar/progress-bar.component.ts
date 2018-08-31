import { Component, OnInit } from '@angular/core';
import { CollectAnswerListServiceService } from '../collect-answer-list-service.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  constructor(private collectAnswerService: CollectAnswerListServiceService ) { }

  ngOnInit() {
  }

  showProgressInfo() : number {
    return this.collectAnswerService.progressInfo();
  }

  showProgressInfo2() : string {
    return this.collectAnswerService.progressInfo2();
  }

}
