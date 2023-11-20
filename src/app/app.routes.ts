import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';



export const routes: Routes = [
    {path: 'paginas/inicio', component: InicioComponent},
    {path: 'paginas/formulario', component: FormularioComponent}
];
export class AppModule{
    
}
