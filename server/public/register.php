   
<?php header('Access-Control-Allow-Origin: *');
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

function error($txt){
    $error = array('error' => $txt);
    print json_encode($error);
    die();
}

function success(){
    $isSuccess = TRUE;
    $success = array('success' => $isSuccess);
    print json_encode($success);
    die();
}

function getRegisteredDate(){ //"2013-03-15"
    $nowDate = new DateTime();
    return date_format($nowDate,"Y-m-d");
}

if(!empty($_POST)){

$email = $_POST['l'];
$pass = $_POST['p'];
$name = $_POST['n'];
$date = getRegisteredDate();

$servername = "localhost";
$username = "clingy_viewer"; 
$password = "clingy_viewer_pass_!";
$db = "clingy_crush";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
!$conn && error("Connection failed: ". mysql_error());


//update
$sql = "INSERT INTO Users (active, email, name, password, registered) VALUES ('1','".$email."','".$name."','".$pass."','".$date."');";

if (mysqli_query($conn, $sql)) {
    success();
} else {

    $pos = "".mysqli_error();
    if(strpos($pos, "Duplicate entry") !== false){
        error("Duplicate entry");
       // echo 'true';
    }else{
        error("Error insert record: " . mysqli_error($conn));
    }
}

//close the connection
mysqli_close($conn);

}else{
    error("Empty post");
}

?>
