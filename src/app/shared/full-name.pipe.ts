import { Pipe, PipeTransform } from '@angular/core';

export interface AlumnoPipe{
nombres: string;
apellidos: string;

}


@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: AlumnoPipe, ...args: unknown[]): unknown {
    return value.nombres.toUpperCase() + ' ' + value.apellidos.toUpperCase();
  }

}
