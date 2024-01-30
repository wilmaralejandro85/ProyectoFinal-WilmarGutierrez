import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  

  constructor(private router: Router, private route: ActivatedRoute){}

  Logout(): void {
    localStorage.removeItem('access-token');
    this.router.navigate(['auth','login']);
  }

 
}
