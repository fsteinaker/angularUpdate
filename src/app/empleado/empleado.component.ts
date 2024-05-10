import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="Federico";
  apellido="Steinaker";
  edad=33;
  profesion="programador";
  empresa="";
  usuRegistrado=false;
  textoRegistro="El usuario no se encuentra registrado.";

  // Binding propertie
  getRegistroUsuario(){
  this.usuRegistrado=true;
  }

  setUsuarioRegistro(event:Event){
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro="El usuario se acaba de registrar"
    } else {
      this.textoRegistro="No hay nadie registrado"
    }
  }

  // SE REEMPLAZA POR UNA FUNCION BINDING BIDERECCIONAL -> ngModel
//  cambiaEmpresa(event:Event){
//    this.empresa=(<HTMLInputElement>event.target).value;
//  }

getedad(){
  return this.edad;
}

constructor() { }

ngOnInit(): void {
}
}
