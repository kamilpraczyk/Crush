   
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

if(!empty($_POST)){

$email = $_POST['l'];
$date = $_POST['d'];

$servername = "localhost";
$username = "clingy_viewer"; 
$password = "clingy_viewer_pass_!";
$db = "clingy_crush";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
!$conn && error("Connection failed: ". mysql_error());


//update
$sql = "UPDATE Users SET valid_to='".$date."' WHERE email='".$email."';";
if (mysqli_query($conn, $sql)) {
    success();
} else {
    error("Error updating record: " . mysqli_error($conn));
}

//close the connection
mysqli_close($conn);

}else{
    error("Empty post");
}

?>
