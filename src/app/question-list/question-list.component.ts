import { Component, OnInit } from '@angular/core';
import { Global, QuestionItem, QuestionsPerPage, MaxPageNo, MinPageNo } from '../QuestionData';
import  {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CollectAnswerListServiceService } from '../collect-answer-list-service.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public pageQuestionList: QuestionItem[];
  private questionList: QuestionItem[];
  private navigationSubscription;
  private activedRouteSubscription;
  
  constructor(private router: Router, 
    private global:Global,
    private activedRoute: ActivatedRoute,
    private modalService: NgbModal,    
    private collectAnswerService: CollectAnswerListServiceService) {    

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });  

    this.activedRouteSubscription = this.activedRoute.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      let activePageNo = params['pageNo'] || 0;
      if (activePageNo > MaxPageNo) {
        this.global.pageNo = MaxPageNo;
        this.router.navigate(['/questions'], { queryParams: { pageNo: this.global.pageNo}});
      }

      if (activePageNo < MinPageNo) {
        this.global.pageNo = MinPageNo;
        this.router.navigate(['/questions'], { queryParams: { pageNo: this.global.pageNo}});
      }

      this.global.pageNo = activePageNo;
    });
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.questionList = this.global.selectQuestionList();
    //this.global.pageNo = 1;
    this.setPage(this.global.pageNo);
  }

  ngOnInit() {       
   
  }
  
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }

    if (this.activedRouteSubscription) {
      this.activedRouteSubscription.unsubscribe();
    }
  }
  
  movePrevious() {
    this.global.pageNo--;
    if (this.global.pageNo < MinPageNo) {
      this.global.pageNo = MinPageNo;

      this.router.navigate(['/start']);
      return;
    }

    //this.setPage(this.global.pageNo);
    this.router.navigate(['/questions'], { queryParams: { pageNo: this.global.pageNo}});
  }

  moveNext(content) {
    this.global.pageNo++;
    if (this.global.pageNo > MaxPageNo) {
      this.global.pageNo = MaxPageNo;

      if (!this.collectAnswerService.isCompleted) {
        this.modalService.open(content, { size: 'sm' });
        return;
      }
      
      this.collectAnswerService.saveAnswerList();
      this.router.navigate(['/end']);      
      return;
    }
   
    //this.setPage(this.global.pageNo);
    this.router.navigate(['/questions'], { queryParams: { pageNo: this.global.pageNo}});
  }

  setPage(page: number) {
    let startIndex: number = ((page - 1) * QuestionsPerPage);
    let endIndex:number = page * QuestionsPerPage;


    // get current page of items
    this.pageQuestionList = this.questionList.slice(startIndex, endIndex);
  }
}
