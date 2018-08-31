import { Component } from '@angular/core';
import { Global } from './QuestionData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerTitle: string = "You are evaluating";

  constructor(private global: Global, private router: Router) {}

  setLanguage(lang: string) {
    let questionUrl = '/questions';    
    this.global.language = lang;

    if (this.router.url.indexOf(questionUrl) > -1)  {
      this.router.navigate(['/questions'], { queryParams: { pageNo: this.global.pageNo } });
    }
    else {
      this.router.navigate([this.router.url]);
    }
  }
}

