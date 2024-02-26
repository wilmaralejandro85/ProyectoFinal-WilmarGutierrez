import { Component } from '@angular/core';
import { Usuarios } from './models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService } from './usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'correo', 'password','rol', 'acciones'];

  usuarios: Usuarios[] =[];
  passEdit: any; 
  mostrar=false;
  usuariosAdd: Usuarios | undefined;
  boton: any;  

  constructor( private _snackBar: MatSnackBar, private usuariosService: UsuariosService){
   
    this.usuariosService.getUsuarios().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      complete: () => {
        const delay = 1000;
        
        
      }
    })

  }

  ngOnChanges(): void {
      
  }

  onUsuarioSubmitted(ev: Usuarios): void{
    console.log('submit desde padre ',this.mostrar);
    if(ev.id==0)
    {
      
      this.usuarios = [...this.usuarios, {...ev, id: new Date().getTime()}];
      console.log('lista usuario',this.usuarios)
      this.mostrar=false;
    }
    else
    {
      this.usuarios = this.updateUsuario(ev);
      this.updateList()
      this.mostrar=false;
    }
    
  }


  onPressUsuarioAdd(){
    this.mostrar=true;
    this.passEdit = this.usuariosAdd;
    console.log('passedit en padre',this.passEdit);
    this.boton='Agregar';
  }

  deleteUsuario(id: number): Usuarios[] {
    const dataSourceFiltered = this.usuarios.filter(el => el.id != id)
    this.usuarios = [...dataSourceFiltered];
    return this.usuarios
  }

  updateList() {
    console.log("UPDATELIST")
    this.usuarios = [...this.getAllUsuario()]
    
  }

  onUsuarioDelete(id: number): void {
    this.deleteUsuario(id);
    this.updateList()
    this.mostrarAlerta("El Usuario fue eliminado con exito","Bien!");
  }

  getAllUsuario() {
    return this.usuarios
  }

  updateUsuario(usuarios: Usuarios) {
    const index = this.usuarios.findIndex(el => el.id == usuarios.id)     
    this.usuarios[index] = usuarios;      
    return this.usuarios
  }

  onPressUsuarioEdit(usuarios:Usuarios) {
    this.passEdit = usuarios
    console.log(usuarios);
    this.mostrar=true;      
    this.boton = 'Actualizar';      
  }

  recibirCancelar(can:boolean): void{
    
    this.mostrar=false;
    console.log('cancelar que llego al padre',can);
  }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration: 3000
    });
  }
 
}
