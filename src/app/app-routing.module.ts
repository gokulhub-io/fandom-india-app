import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { BlogComponent } from './screens/blog/blog.component';


const routes: Routes = [
      { 
        path: 'dashboard', 
        component: DashboardComponent,
      },
      {
        path: 'blog',
        component:BlogComponent
      }
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
