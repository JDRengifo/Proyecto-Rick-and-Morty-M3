import React from "react";

function validation(input){
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexnumber =  /.*\d.*/;
  
    
    //validacion user name
    if (!regexEmail.test(input.email)) {
        errors.email = 'Debe ser correo electronico'
    }
    if (!input.email) {
        errors.email = 'El usuario no puede estar vacio'
    }
    if (input.email.length > 35) {
        errors.email = 'Debe tener menos de 35 caracteres'
    }
  
    //validacion del password
    if (!regexnumber.test(input.password)) {
        errors.password = "La contrasena debe tener un numero"
    }
    if (input.password.length<5) {
        errors.password = "Debe tener mas de 5 caracteres"
    }
    if (input.password.length>9) {
        errors.password = "Debe tener menos 11 caracteres"
    }
    console.log(errors)
    return errors;
  }
  export default validation;
  