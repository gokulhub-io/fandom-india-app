import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
    public menuItems=[
    {menuURL:'/dashboard/homepage',menuName:'Home Page'},
    {menuURL:'/dashboard/movies',menuName:'Movies'},
    {menuURL:'/dashboard/series',menuName:'Series'},
    {menuURL:'/dashboard/contact-us',menuName:'Contact Us'}
  ]
    
    constructor(private router:Router) { }
    
    ngOnInit(): void {   
  }

  public redirectLink(url:any){
    this.router.navigateByUrl(url);
  }

}
