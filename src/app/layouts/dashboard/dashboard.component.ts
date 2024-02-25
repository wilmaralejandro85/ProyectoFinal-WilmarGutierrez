import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService){}

  Logout(): void {
    this.authService.logout();
  }

 
}
