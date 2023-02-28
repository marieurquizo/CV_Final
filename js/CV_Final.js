(function() {
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements;
        botton = document.getElementById('btn');

    var validarNombreyApellido = function(e){
        if (formulario.nombreyapellido.value == 0){
            alert("Complete su Nombre y Apellido");
            e.preventDefault();
        }
    }
    
    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Complete su dirección de email");
            e.preventDefault();
        }
    } 

    var validarTelefono = function(e){
        if (formulario.telefono.value == 0){
            alert("Complete su teléfono");
            e.preventDefault();
        }
    }

    var validarMensaje = function(e){
        if (formulario.mensaje.value == 0){
            alert("Escribe tu mensaje");
            e.preventDefault();
        }
    }
     
    var validar = function(e){
        validarNombreyApellido(e);
        validarEmail(e);
        validarTelefono(e);
        validarMensaje(e);
    }    
    
    formulario.addEventListener("submit", validar);


}())