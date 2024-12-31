<?php


error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


$db_conn = mysqli_connect("localhost", "root", "", "reactphp");
if($db_conn === false){
    die("ERROR : NÂO CONECTOU!". mysqli_connect_error());
}
$method = $_SERVER['REQUEST_METHOD'];
// echo "test----" . $method; die;

switch($method){
    case 'GET':
        $alluser = mysqli_query($db_conn, "SELECT * FROM tbl_user");
        if(mysqli_num_rows($alluser) > 0){
            while($row = mysqli_fetch_array($alluser)){
                $json_array["userdata"][] = array("id"=>$row['id'], "username"=>$row['username'], 
                "email"=>$row['useremail'], "status"=>$row['status']);
            }
            echo json_encode($json_array['userdata']);
            return;
        }else{
            echo json_encode(["result"=> "Por favor cheque seu banco de dados"]);
        }
    break;
    case 'POST':
        $userPostdata = json_decode(file_get_contents("php://input"));
        // var_dump( $userPostdata); die();
        $userName = $userPostdata->username;
        $userEmail = $userPostdata->email;
        $status = $userPostdata->status;

        $result = mysqli_query($db_conn, "INSERT INTO tbl_user (username, useremail, status)
        VALUES('$userName', '$userEmail', '$status')");

        if($result){
            echo json_encode(['success' =>'usuário adicionado com sucesso!']);
            return;
        }else{
            echo json_encode(['success' =>'Check as informações!']);
        }
    break;
}