<?php
#COLOCAR EL PATH DE DONDE SE GUARDARAN LOS REPORTES
date_default_timezone_set("America/La_Paz");
$path="C:/xampp/htdocs/cajas/reportes";

# LO QUE RECIBIMOS EN POST
$usuario=$_POST["usuario"];
$contraseña=$_POST["contraseña"];
$ciudad=$_POST["ciudad"];
$agencia=$_POST["agencia"];
$fecha_inicio=$_POST["fecha_ini"];
$fecha_final=$_POST["fecha_fin"];
# Convertimos la fecha a formato
$fecha_solicitud=date("d/m/Y");
$fecha_ini=date("d/m/Y", strtotime($fecha_inicio));
$fecha_fin=date("d/m/Y", strtotime($fecha_final));
# Copia de las fechas cambiando formato
$copia_fecha_ini=date("Y/m/d", strtotime($fecha_inicio));
$copia_fecha_fin=date("Y/m/d", strtotime($fecha_final));
# Datos complementarios para el nombre del archivo, separador y hora
$hora=date("h:i:s A");
$fecha_nombre=date("d-m-Y");
$separador=";";
#PARA CREAR EL ARCHIVO Y ABRIR EN UN PATH DETERMINADO CON EL NOMBRE MODIFICADO
$fi=fopen($path.DIRECTORY_SEPARATOR.$agencia.'_'.$fecha_nombre.'.txt','a');
fwrite($fi,$usuario.$separador.$contraseña.$separador.$ciudad.$separador.$agencia.$separador.$fecha_solicitud.$separador.$hora.$separador.$fecha_ini.$separador.$fecha_fin.$separador.$copia_fecha_ini.$separador.$copia_fecha_fin);
fclose($fi);
?>
