import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  formulario = new FormGroup({nome: new FormControl(''), email: new FormControl('', [Validators.email]),});
  
  enviar(){
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    } 
    else{
      console.log("O nome enviado foi:",  this.formulario.value.nome);
      console.log("O email enviado foi:",  this.formulario.value.email);
    }
  }
}
