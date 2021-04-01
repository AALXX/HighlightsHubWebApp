<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Expose-Headers: Content-Length, X-JSON");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");


error_reporting(E_ALL);
ini_set('display_errors', 1);



if (isset($_POST))
{

    require "dbh.inc.php";

    $data = json_decode(file_get_contents("php://input"), true);


    $userName = $data['uid'];
    $email = $data['mailuid'];;
    $password = $data['Pwd'];
    $passwordReapeat = $data['reapeatPwd'];
    $token =  openssl_random_pseudo_bytes(16);

    //empty fields
    if (empty($userName) || empty($email) || empty($password) || empty($passwordReapeat))
    {
        
        exit();
    }
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match("/^[a-zA-Z0-9]*$/", $userName))
    {
        exit();
    }
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        exit();
    }
    else if (!preg_match("/^[a-zA-Z0-9]*$/", $userName))
    {
        exit();
    }
    else if ($password !== $passwordReapeat){
        exit();
    }
    else
    {
        $sql = "SELECT uidUsers FROM users WHERE uidUsers=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql))
        {
            exit();
        }
        else{
            mysqli_stmt_bind_param($stmt, "s", $userName);
            mysqli_stmt_execute($stmt);

            mysqli_stmt_store_result($stmt);
            $resultCheck = mysqli_stmt_num_rows($stmt);
            if ($resultCheck > 0)
            {
                exit();
            }
            else{

            
               $sql = "INSERT INTO users(uidUsers,Token ,emailUsers,pwdUsers) VALUES (?,?,?,?)";
               $stmt = mysqli_stmt_init($conn);
               if (!mysqli_stmt_prepare($stmt, $sql))
               {
                   exit();
               }
               else{

                   $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

                   $FinalToken = bin2hex($token);
                   
                   mysqli_stmt_bind_param($stmt, "ssss", $userName,$FinalToken,$email,$hashedPwd);
                   mysqli_stmt_execute($stmt);


                   exit();

               }
            }
        }
    }

    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}

else{
        exit();
}
