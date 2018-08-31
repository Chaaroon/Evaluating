import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { StartPageComponent} from './start-page/start-page.component';
import { EndPageComponent } from './end-page/end-page.component';
import { QuestionListComponent} from './question-list/question-list.component';

const routes : Routes = [
  { path: 'start', component: StartPageComponent},
  { path: 'questions', component: QuestionListComponent},
  { path: 'end', component: EndPageComponent},
  { path: '**', redirectTo: '/start', pathMatch: 'full' },
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  ]
})
export class AppRoutingModule { }