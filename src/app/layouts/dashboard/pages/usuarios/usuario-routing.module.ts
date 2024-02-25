import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
    imports: [RouterModule.forChild([

        {
            path: '',
            component: UsuariosComponent,

        },
    ]),
],
exports: [RouterModule],
})
export class UsuariosRoutingModule {}