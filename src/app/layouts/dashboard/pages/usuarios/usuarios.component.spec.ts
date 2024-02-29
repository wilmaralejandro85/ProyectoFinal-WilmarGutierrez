import { TestBed } from "@angular/core/testing"
import { Usuarios } from "./models"
import { UsuariosComponent } from "./usuarios.component"
import { UsuariosService } from "./usuarios.service";
import {MockProvider} from 'ng-mocks';
import { of } from "rxjs";
describe('Pruebas de UsuariosComponent', () => {
    let component: UsuariosComponent;

beforeEach (async() => {
    await TestBed.configureTestingModule({
        declarations: [UsuariosComponent],
        providers: [MockProvider(UsuariosService,{
            getUsuarios: () => of([ 
                {
                    id: '1709174481396',
                    nombres: 'wilmar',
                    apellidos: 'gutierrez',
                    correo: 'wilmar@email.com',
                    password: '12345',
                    rol: 'ADMIN'
                  },
                  {
                    id: '1709175024956',
                    nombres: 'carlos',
                    apellidos: 'fernandez',
                    correo: 'carlos@email.com',
                    password: '12345',
                    rol: 'USER'
                  },
            ])
        })]
    });

    component = TestBed.createComponent(UsuariosComponent).componentInstance;
})

it('Las columnas de la tabla de usuarios deben ser (displayedColumns): "id", "nombres", "apellidos", "correo", "password","rol", "acciones"', () => {

    expect(component.displayedColumns).toContain('id');
    expect(component.displayedColumns).toContain('nombres');
    expect(component.displayedColumns).toContain('apellidos');
    expect(component.displayedColumns).toContain('correo');
    expect(component.displayedColumns).toContain('password');
    expect(component.displayedColumns).toContain('rol');
    expect(component.displayedColumns).toContain('acciones');

});

});

