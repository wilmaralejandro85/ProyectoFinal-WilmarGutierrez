import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  revelarPassword = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar){
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required,Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  onSubmit(): void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    else
    {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value);
    }
  }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration: 3000
    });
  }
}
