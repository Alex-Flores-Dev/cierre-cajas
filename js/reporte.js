console.log("confirmado")


function validacion(){
    var fecha_ini;
    var fecha_fin;
    fecha_ini = document.getElementById("fecha_ini").value;
    fecha_fin = document.getElementById("fecha_fin").value;
    if(fecha_fin<fecha_ini){
        alert("no se puede enviar");
        return false;
    }

}



