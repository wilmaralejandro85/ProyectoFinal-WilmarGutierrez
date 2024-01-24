import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(@Inject('USER_TOKEN') userToken: string) { 
    console.log('El servicio ha sido instanciado', userToken);
  }
}
