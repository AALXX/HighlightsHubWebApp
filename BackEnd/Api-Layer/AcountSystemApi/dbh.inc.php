<?php
$ServerName = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "gamehighlitsdb";

$conn = mysqli_connect($ServerName, $dbUserName, $dbPassword, $dbName);

if (!$conn)
{
    die("Conection failed: ".mysqli_connect_error());
}

?>