   
<?php header('Access-Control-Allow-Origin: *');
//TO see errors:
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

$email = urldecode($_GET["l"]);
$pass = urldecode($_GET["p"]);

function error($txt){
    $error = array('error' => $txt);
    print json_encode($error);
    die();
}

function isValidDate($valid_to){ //"2013-03-15"
    $validDate = new DateTime($valid_to);
    $nowDate   = new DateTime();
	if($validDate > $nowDate || date_format($nowDate,"Y-m-d") === $valid_to){
        return TRUE;
	}
    return FALSE;
}

$servername = "localhost";
$username = "clingy_viewer"; 
$password = "clingy_viewer_pass_!";
$db = "clingy_crush";


$conn = mysqli_connect($servername, $username, $password, $db);
!$conn && error("Connection failed: ". mysql_error());


//execute the SQL query and return records
$sql="SELECT email, name, password, valid_to, active, last_login FROM Users WHERE email='".$email."'";
$result=mysqli_query($conn,$sql);

$isValid = FALSE;
$user = null;

$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
if($row["email"] === $email && $row["password"] === $pass){
    $user = $row;
    if(isValidDate($row["valid_to"])){
            $isValid = TRUE;
    }
}


// Free result set
mysqli_free_result($result);

$data = array('isPrime' => $isValid, 'user' => $user);
print json_encode($data);

//close the connection
mysql_close($conn);

////clingy_admin 89fVSlE$~9t}

?>
