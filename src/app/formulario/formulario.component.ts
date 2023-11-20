import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  title = 'prAngular';
  paginas = [
    {enlace: 'Inicio', path: 'paginas/inicio'},
    {enlace: 'Formulario', path: 'paginas/formulario'}
  ];
}
