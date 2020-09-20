function cambiarNombre(idDiv) {
    let Nombre = prompt('Escribe Nuevo Nombre')
    document.getElementById(idDiv).innerHTML = Nombre
}
function cambiarNombre2(idDiv) {
    let Nombre2 = prompt('Escribe Nuevo Nombre')
    document.getElementById(idDiv).innerHTML = Nombre2
}
function cambiarNombre3(idDiv) {
    let Nombre3 = prompt('Escribe Nuevo Nombre')
    document.getElementById(idDiv).innerHTML = Nombre3
}

function validarFormulario() {

    let txtNombre = document.getElementById('nombre').value;
    let txtApellido = document.getElementById('apellido').value;
    let txtEdad = document.getElementById('edad').value;
    let txtTelefono = document.getElementById('telefono').value;
    let txtEmail = document.getElementById('correo').value;
    let txtfechaNacimiento = document.getElementById('fechaNacimiento').value
    let txtContraseña = document.getElementById('contraseña').value;

    if (txtNombre == null || txtNombre.length == 0) {
        alert('Error: Nombre Invalido - Complete Este Campo');
        return false;
    }
    if (txtApellido == null || txtApellido.length == 0) {
        alert('Error: Apellido Invalido - Complete Este Campo');
        return false;
    }
    if (txtEdad == null || txtEdad.length == 0) {
        alert('Error: Edad Invalida - Complete Este Campo');
        } else {
            if (isNaN(txtEdad)) {
                alert('Ojo No se Admite Letras');
                return false;
            }
    }
    if (txtTelefono == null || txtTelefono.length == 0) {
        alert('Error: Telefono Invalido - Complete Este Campoo');
        return false;
        } else {
            if (isNaN(txtTelefono)) {
                alert('Ojo No se Admite Letras');
                return false;
            }
    }
    if (txtEmail == null || txtEmail.length == 0) {
            alert('Error: Email Invalido - Complete Este Campoo');
            return false;
        }
    if (txtfechaNacimiento == null || txtfechaNacimiento.length == 0) {
        alert('Error: fechaNacimiento Invalida - Complete Este Campo');
        return false;
    }
    if (txtContraseña == null || txtContraseña.length == 0) {
            alert('Error: Contraseña Invalida Necesita Más de 8 Digitos');
            return false;
        }
    alert('Información Valida! - Gracias Por Registrarte');
            return true;
        
}
