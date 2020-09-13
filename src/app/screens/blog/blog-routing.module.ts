import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { BlogComponent } from './blog.component';
import { QuestionsAnswersComponent } from './questions-answers/questions-answers.component';


const routes: Routes = [
  {
    path:'',
    component:BlogComponent,
    children:[
      {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
      },
      {
        path:'articles',
        component:ArticlesComponent
      },
      {
        path:'questions-answers',
        component:QuestionsAnswersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
