import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  //Reactive form
  public registerForm = this.fb.group({

    nombre:['', [ Validators.required, Validators.minLength(3) ] ],
    email: ['', [ Validators.required, Validators.email] ],
    password: [ '', [ Validators.required, Validators.minLength(6)] ],
    password2: [ '', [ Validators.required, Validators.minLength(6)] ],
    terminos: [ true, Validators.required ]

  }, {
    Validators: this.passwordsIguales('password', 'password2')
  });
  
  
  constructor( private fb: FormBuilder) {}


  //metodo para crear usuario
  crearUsuario() {
    
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if( this.registerForm.valid ) {
      console.log(' posteando formulario ')
    } else {
      console.log("no correcto")
    }

  }

  campoNoValido( campo:string ):boolean {

    if ( this.registerForm.get(campo)?.invalid && this.formSubmitted) {

      return true

    } else {

      return false
      
    }

  }

  aceptaTerminos() {

    return  !this.registerForm.get('terminos')!.value && this.formSubmitted

  }

  passwordNoValido():boolean {

    const pass1 = this.registerForm.get('password')!.value;
    const pass2 = this.registerForm.get('password2')!.value;

    if ((pass1 !== pass2) && this.formSubmitted) {
        
      return true;

    } else {

        return false;
    
      }
  }


  passwordsIguales( pass1Name:string, pass2Name: string) {

    return (FormGroup: FormGroup) => {

      const pass1Control = FormGroup.get(pass1Name);
      const pass2Control = FormGroup.get(pass2Name);

      if ( pass1Control === pass2Control ) {

        pass2Control?.setErrors(null)

      } else{

        pass2Control?.setErrors({noEsIgual: true})
      }
    }
  }

}
