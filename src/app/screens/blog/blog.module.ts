import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';

import { QuestionsAnswersComponent } from './questions-answers/questions-answers.component';
import { ArticlesComponent } from './articles/articles.component';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
    QuestionsAnswersComponent, 
    ArticlesComponent, 
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
