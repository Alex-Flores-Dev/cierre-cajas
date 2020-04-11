function block(){

    var usuario = document.getElementById('usuario').value
    var contraseña = document.getElementById('contraseña').value
    var ciudad = document.getElementById('ciudad').value
    var agencia = document.getElementById('agencia').value
    var fecha_ini = document.getElementById('fecha_ini').value
    var fecha_fin = document.getElementById('fecha_fin').value

    const $form = document.querySelector('#form')
    event.preventDefault()
    const formData= new FormData($form)
    fetch('./generate_reporte.php',{
        method:'POST',
        body:formData,
    })
    // PARA VALIDAR QUE LA FECHA FINAL NO SEA MENOR Q LA INICIAL
    if (usuario==="" || contraseña==="" || ciudad==="" || agencia==="" || fecha_ini==="" || fecha_fin===""){
        alert("Completar datos")
    }

    else{
        if(fecha_ini<=fecha_fin){
            document.getElementById("enviar").disabled = true;

        }
        else{
            alert("Corregir las fechas")

        }
    }
}
