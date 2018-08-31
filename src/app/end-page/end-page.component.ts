import { Component, OnInit } from '@angular/core';
import { CollectAnswerListServiceService } from '../collect-answer-list-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.css']
})
export class EndPageComponent implements OnInit {
 
  constructor(
    private collectAnswerListService: CollectAnswerListServiceService,
    private router: Router) { }

  ngOnInit() {
    if (!this.collectAnswerListService.isCompleted) {
      this.router.navigate(['/questions'], { queryParams: { pageNo: 1}});
    }
  }
}
