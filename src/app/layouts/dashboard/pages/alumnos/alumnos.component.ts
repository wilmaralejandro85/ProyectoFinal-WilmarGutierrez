import { Component } from '@angular/core';
import { Alumnos } from './models';
import { AlumnoPipe } from '../../../../shared/full-name.pipe';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  displayedColumns: string[] = ['id','nombreCompleto', 'edad', 'correo', 'celular'];
  dataSource : Alumnos[]=[
  {id: 1705884607891, nombres: 'Wilmar Alejandro', apellidos:'Gutierrez Ramirez',edad: 38, correo: 'wilmaralejandro85@hotmail.com', celular:'3184249076'},
  {id: 1705884607456, nombres: 'Jhovany Hernesto', apellidos:'Pedraza Lopez',edad: 35, correo: 'jhonvanypedra@gmail.com', celular:'3114504034'},
  {id: 1705884607123, nombres: 'Maria Helena', apellidos:'Cifuentes Gonzalez',edad: 29, correo: 'marihelena123@hotmail.com', celular:'3013454567'},
  {id: 1705884607555, nombres: 'Juan Fernando', apellidos:'Higuita Arias',edad: 45, correo: 'juanfernanhi@hotmail.com', celular:'3114387670'},
  {id: 1705884607122, nombres: 'Luisa Fernanda', apellidos:'Lujan Valdez',edad: 36, correo: 'luisafernanda456@gmail.com', celular:'312345523'},
  {id: 1705884607788,  nombres: 'Julian de Jesus', apellidos:'Moralez Alzate',edad: 27, correo: 'julijesus45@gmail.com', celular:'3115463456'},
  
    ];

   
    onAlumnoSubmitted(ev: Alumnos): void{
      this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];

    }

    
}
