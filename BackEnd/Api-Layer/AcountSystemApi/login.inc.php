<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Expose-Headers: Content-Length, X-JSON");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");


if (isset($_POST)) {

    $data = json_decode(file_get_contents("php://input"), true);
    
    require "dbh.inc.php";
    $mailuid = $data['mailuid'];
    $password = $data['Pwd'];
    $UserToken = 0;



    if (empty($mailuid) || empty($password)) {

        header('Content-Type: application/json');
        exit();
    } else {
        $sql = "SELECT * FROM users WHERE emailUsers=?;";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {

            header('Content-Type: application/json');
            
            exit();
        } else {
            mysqli_stmt_bind_param($stmt, "s", $mailuid);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            if ($row = mysqli_fetch_assoc($result)) {
                $pwdCheck = password_verify($password, $row['pwdUsers']);
                if ($pwdCheck == false) {
                    header('Content-Type: application/json');
                    
                    exit();
                } else if ($pwdCheck == true) {


                    $sql = "UPDATE users SET IsLogedIn = '1'  WHERE emailUsers='$mailuid';";

                    $mysql = "SELECT Token FROM users  WHERE emailUsers=?;";

                    $stmt = mysqli_stmt_init($conn);

                    if (!mysqli_stmt_prepare($stmt, $mysql)) {

                        header('Content-Type: application/json');

                        exit();
                    } else {
                        mysqli_stmt_bind_param($stmt, "s", $mailuid);
                        mysqli_stmt_execute($stmt);
                        $result = mysqli_stmt_get_result($stmt);

                        mysqli_stmt_prepare($stmt, $sql);
                        mysqli_stmt_execute($stmt);
                        
                        
                        if ($row = mysqli_fetch_assoc($result)) {

                            $UserToken = $row['Token'];

                            header('Content-Type: application/json');
                            echo json_encode($UserToken);
                        }
                    }

                    exit();

                } else {

                    exit();
                }
            } else {

                exit();
            }
        }
    }
} else {
    header('Content-Type: application/json');
    exit();
}
