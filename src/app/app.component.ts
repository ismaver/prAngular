import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppModule { 
  

}
export class AppComponent {
  title = 'prAngular';
  paginas = [
    { enlace: 'Inicio', path: './inicio' },
    { enlace: 'Formulario', path: './formulario' }
  ];

}
export class UserFormComponent {
  userForm = new FormGroup({
    cedula: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

}
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  addUser(user: any) {
    return this.firestore.collection('users').add(user);
  }

}



