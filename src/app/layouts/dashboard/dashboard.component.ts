import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  mostrarAlumnos=false;
  mostrarUsuarios=false;
  mostrarHome=true;
  mostrarInscripciones=false;

  PressMostrarAlumnos() {
    this.mostrarAlumnos=true;
    this.mostrarUsuarios=false;
    this.mostrarHome=false;
    this.mostrarInscripciones=false;
  }

  PressMostrarUsuarios() {
    this.mostrarAlumnos=false;
    this.mostrarUsuarios=true;
    this.mostrarHome=false;
    this.mostrarInscripciones=false;
  }

  PressMostrarHome() {
    this.mostrarAlumnos=false;
    this.mostrarUsuarios=false;
    this.mostrarHome=true;
    this.mostrarInscripciones=false;
  }

  PressMostrarInscripciones() {
    this.mostrarAlumnos=false;
    this.mostrarUsuarios=false;
    this.mostrarHome=false;
    this.mostrarInscripciones=true;
  }
}
