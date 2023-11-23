const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    fecha: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
    contraseñaFuerte:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    un_nombre : /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-z\u00DF-\u00F6\u00F8-\u00FF ]*$/,    //valida que solo la primera letra se mayuscula y el resto min
    texto: /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-zA-Z\u00C0-\u00D6\u00D8-\u00DE ]*$/,
    numero: /^\d+$/,
    placa: /^[a-zA-Z]{3}\s\d{3}$/

}  


const campos = {
    nombre_e: false,
    nombre_em: false,
    NIT: false,
    encargado_e: false,
    encargado_f: false,
    fecha_i: false,
    fecha_f: false,
    lugar_r: false,
    t_e_e: false,
    numero_p: false,
    estado: false
}


const validarFormulario = (e) => {
    switch (e.target.name) {


        case "nombre_e":
            validarCampo(expresiones.texto, e.target, 'nombre_e');
            break;


        case "nombre_em":
            validarCampo(expresiones.texto, e.target, 'nombre_em');
            break;
        case "NIT":
            validarCampo(expresiones.numero, e.target, 'NIT');
            break;
        case "encargado_e":
            validarCampo(expresiones.texto, e.target, 'encargado_e');
            break;
        case "encargado_f":
            validarCampo(expresiones.texto, e.target, 'encargado_f');
            break;
        case "t_e_e":
            validarCampo(expresiones.telefono, e.target, 'telefono_encargado_fundacion');
            break;
        case "fecha_i":
            validarCampo(expresiones.telefono, e.target, 'fecha_i');
            break;
        case "lugar_r":
            validarCampo(expresiones.texto, e.target, 'lugar_r');
            break;
        case "fecha_f":
            validarCampo(expresiones.telefono, e.target, 'fecha_f');
            break;
        case "numero_p":
            validarCampo(expresiones.telefono, e.target, 'numero_p');
            break;
    }
}


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}


const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');


    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();


    const terminos = document.getElementById('terminos');
    if (campos.usuario && campos.targetaIdentidad && campos.sexoBiologico && campos.beneficiario && campos.password && campos.correo && campos.telefono && terminos.checked) {
        formulario.reset();


        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);


        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});

