import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { Usuarios } from './pages/usuarios/models';
import { Observable } from 'rxjs';
import { selectAuthUser } from '../../core/store/auth/selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  authUser$: Observable<Usuarios | null>;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private store: Store){
this.authUser$ = this.store.select(selectAuthUser);
console.log('usuario logueado', this.authUser$);
  }

  Logout(): void {
    this.authService.logout();
  }

 
}
