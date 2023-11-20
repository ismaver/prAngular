import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  title = 'prAngular';
  paginas = [
    {enlace: 'Inicio', path: 'paginas/inicio'},
    {enlace: 'Formulario', path: 'paginas/formulario'}
  ];

}
