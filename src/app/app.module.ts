import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormsModule } from '@angular/forms';
import { CollectAnswerListServiceService } from './collect-answer-list-service.service';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StartPageComponent } from './start-page/start-page.component';
import { EndPageComponent } from './end-page/end-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { Global } from './QuestionData';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionListComponent,
    ProgressBarComponent,
    StartPageComponent,
    EndPageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CollectAnswerListServiceService,
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


