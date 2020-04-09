<?php
#COLOCAR EL PATH DE DONDE SE GUARDARAN LOS REPORTES
$path="C:/xampp/htdocs/cajas/reportes";
$usuario=$_POST["usuario"];
$contraseña=$_POST["contraseña"];
$ciudad=$_POST["ciudad"];
$agencia=$_POST["agencia"];
$fecha_ini=$_POST["fecha_ini"];
$fecha_fin=$_POST["fecha_fin"];
$separador=";";
#PARA CREAR EL ARCHIVO Y ABRIR EN UN PATH DETERMINADO CON EL NOMBRE MODIFICADO
$fi=fopen($path.DIRECTORY_SEPARATOR.$agencia.'.txt','a');
fwrite($fi,$_POST['usuario']);
fwrite($fi,$usuario.$separador.$contraseña.$separador.$ciudad.$separador.$agencia.$separador.$fecha_ini.$separador.$fecha_fin);
fclose($fi);
?>
