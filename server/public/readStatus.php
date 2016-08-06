   
<?php header('Access-Control-Allow-Origin: *');
//TO see errors:
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

$email = urldecode($_GET["l"]);

function error($txt){
    $error = array('error' => $txt);
    print json_encode($error);
    die();
}


$servername = "localhost";
$username = "clingy_viewer"; 
$password = "clingy_viewer_pass_!";
$db = "clingy_crush";


$conn = mysqli_connect($servername, $username, $password, $db);
!$conn && error("Connection failed: ". mysql_error());


//execute the SQL query and return records
$sql="SELECT name, value FROM Status WHERE email='".$email."'";
$result=mysqli_query($conn,$sql);


$jsonData = array();
while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $jsonData[] = $row;
}




$data = array('state' => $jsonData);
print json_encode($data);

mysqli_free_result($result);
mysql_close($conn);

?>
