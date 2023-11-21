const formulario_add_cliente = document.getElementById('form')
const nombre_add_cliente = document.getElementById('nombre_cliente')
const apellidio_add_cliente=document.getElementById('apellido_cliente')
const telefono_add_cliente = document.getElementById('telefono_cliente')
const email_add_cliente = document.getElementById('email_cliente')
const password_add_cliente = document.getElementById('password_cliente')
const direccion_add_cliente = document.getElementById('direccion_cliente')
const pais_add_cliente = document.getElementById('select_pais')





// TRAE LA FECHA Y HORA ACTUAL AL CAMPO DATE TIME
// const fechaHoraActual = new Date().toISOString().slice(0, 16);
// datetime.value = fechaHoraActual




formulario_add_cliente.addEventListener('submit', e => {
    e.preventDefault()




    validateInputs()
})








const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');




    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}




const setSuccess = elemento => {
    const inputControl = elemento.parentElement
    const errorDisplay = inputControl.querySelector('.error')




    errorDisplay.innerText = ""
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}


// VALIDA QUE EL FORMATO DEL CORREO ESTE BIEN(TEXTO @ TEXTO . TEXTO)
const validarCorreo = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// VALIDA QUE TENGA ALMENOS 8 CARACTERES
const validarContraseña = pass => {
    const re = /^.{8,}$/
    return re.test(pass)
}


// VALIDA QUE SOLO SEAN LETRAS(SE PUEDEN ESPACIOS Y LETRAS CON ACENTOS)
const validarTexto = text => {
    const re = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/
    return re.test(String(text))
}   


// VALIDA QUE SOLO SE INGRESEN LETRAS Y QUE LA PRIMERA SEA MAYUSCULA (LA PUEDEN USAR PARA CAMPOS COMO NOMBRES)
const validarNombre = nombre => {
    const re = /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-zA-Z\u00C0-\u00D6\u00D8-\u00DE ]*$/
    return re.test(nombre)
}

const validarDireccion = cadena => {
    const re = /^[A-Za-z\u00C0-\u00D6\u00D8-\u00DE0-9\s#-]+$/
    return re.test(cadena)
  }
  

// VALIDA QUE SOLO SE PUEDAN INGRESAR NUMEROS
const validarNumero = numero => {
    const re = /^\d+$/
    return re.test(numero)
}


const validateInputs = () => {
    const direccionValue = direccion_add_cliente.value.trim()
    const emailValue = email_add_cliente.value.trim()
    const passValue = password_add_cliente.value.trim()
    const paisValue = pais_add_cliente.value.trim()
    const nombreValue = nombre_add_cliente.value.trim()
    const telefonoValue = telefono_add_cliente.value.trim()




    if (direccionValue === "") {
        setError(direccion_add_cliente, 'No puedes dejar este campo vacio.')
    } else if (!validarDireccion(direccionValue)) {
        setError(direccion_add_cliente, 'No se permiten caracteres especiales.')
    } else {
        setSuccess(direccion_add_cliente)
    }


    if (nombreValue === "") {
        setError(nombre_add_cliente, 'No puedes dejar este campo vacio.')
    } else if (!validarNombre(nombreValue)) {
        setError(nombre_add_cliente, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    } else {
        setSuccess(nombre_add_cliente)
    }


    if (telefonoValue === "") {
        setError(telefono_add_cliente, 'No puedes dejar este campo vacio.')
    } else if (!validarNumero(telefonoValue)) {
        setError(telefono_add_cliente, 'Solo puedes ingresar números.')
    } else if (telefonoValue.length > 10 || telefonoValue.length < 10) {
        setError(telefono_add_cliente, 'Solo puedes ingresar un telefono real (10 Caracteres)')
    } else {
        setSuccess(telefono_add_cliente)
    }




    if (emailValue === "") {
        setError(email_add_cliente, 'El campo correo eléctronico debe de ser llenado.')
    } else if (!validarCorreo(emailValue)) {
        setError(email_add_cliente, 'Ingresa un correo electrónico valido.')
    } else {
        setSuccess(email_add_cliente)
    }




    if (passValue === "") {
        setError(password_add_cliente, 'El campo contraseña debe de ser llenado.')
    } else if (!validarContraseña(passValue)) {
        setError(password_add_cliente, 'La contraseña debe de tener al menos 8 caracteres.')
    } else {
        setSuccess(password_add_cliente)
    }


    if (paisValue === "seleccionar") {
        setError(pais_add_cliente, 'Debes de seleccionar una opción valida')
        setError(departamento_add_cliente, 'debe de seleccionar un pais primero')
    } else {
        setSuccess(pais_add_cliente)
        setSuccess(departamento_add_cliente)
    }




}


if (nombre_add_cliente && password_add_cliente && email_add_cliente && telefono_add_cliente && pais_add_cliente && departamento_add_cliente && direccion_add_cliente ) {
    
function mostrarAlertaSucces() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
}  

}