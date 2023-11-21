const formulario_add_venta = document.getElementById('form_agregar_venta')
const nombre_cliente_add_venta = document.getElementById('nombre_venta')
const apellido_cliente_add_venta = document.getElementById('apellido_venta')
const fecha_add_venta = document.getElementById('fecha_venta')
const precio_tot_add_venta = document.getElementById('precio_total_venta')

formulario_add_venta.addEventListener('submit', e => {
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

// TRAE LA FECHA Y HORA ACTUAL AL CAMPO DATE TIME
// const fechaHoraActual = new Date().toISOString().slice(0, 16);
// datetime.value = fechaHoraActual


const validateInputs = () => {
    const nombreValueVenta = nombre_cliente_add_venta.value.trim()
    const ApellidoValueVenta = apellido_cliente_add_venta.value.trim()
    const FechaValue = fecha_add_venta.value.trim()
    const totalValue = precio_tot_add_venta.value.trim()



    if (ApellidoValueVenta === "") {
        setError(apellido_cliente_add_venta, 'No puedes dejar este campo vacio.')
    } else if (!validarNombre(ApellidoValueVenta)) {
        setError(apellido_cliente_add_venta, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    } else {
        setSuccess(apellido_cliente_add_venta)
    }


    if (nombreValueVenta === "") {
        setError(nombre_cliente_add_venta, 'No puedes dejar este campo vacio.')
    } else if (!validarNombre(nombreValueVenta)) {
        setError(nombre_cliente_add_venta, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    } else {
        setSuccess(nombre_cliente_add_venta)
    }

    // if (FechaValue == "") {
    //     setError(fecha_add_venta,'No se puede dejar el campo vacio')
    // }else if (!fechaHoraActual(FechaValue)) {
    //     setError(fecha_add_venta, 'debe ser con fecha y hora actuales')
    // }else{
    //     setSuccess(fecha_add_venta)
    // }


    if (totalValue === "") {
        setError(precio_tot_add_venta, 'No puedes dejar este campo vacio.')
    } else if (!validarNumero(totalValue)) {
        setError(precio_tot_add_venta, 'Solo puedes ingresar números.')
    } else {
        setSuccess(precio_tot_add_venta)
    }


}


// if (nombre_add_cliente && password_add_cliente && email_add_cliente && telefono_add_cliente && pais_add_cliente && departamento_add_cliente && direccion_add_cliente ) {
    
// function mostrarAlertaSucces() {
//     Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Your work has been saved",
//         showConfirmButton: false,
//         timer: 1500
//     });
// }  

