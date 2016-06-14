   
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

// Create connection
$conn = mysql_connect($servername, $username, $password);
!$conn && error("Connection failed: ". mysql_error());

//Select a database to work with
$selected = mysql_select_db("clingy_crush",$conn);
!$selected &&  error("Could not select database: ". mysql_error());


//execute the SQL query and return records
$result = mysql_query("SELECT email, name, password, valid_to FROM Users WHERE email='".$email."';");

$rows = array();
$isValid = FALSE;
$user = null;

while ($row = mysql_fetch_array($result)) {
    $rows[] = $row;
    if($row{'email'} === $email && $row{'password'} === $pass){
        $user = $row;
        if(isValidDate($row{'valid_to'})){
            $isValid = TRUE;
        }
    }
   //echo "login:".$row{'login'}." Name:".$row{'name'}."<br>";
}

$data = array('isPrime' => $isValid, 'user' => $user);
print json_encode($data);

//close the connection
mysql_close($conn);

////clingy_admin 89fVSlE$~9t}

?>
