   
<?php header('Access-Control-Allow-Origin: *');
$email=$_GET["l"];
$pass=$_GET["p"];

function error($txt){
    $error = array('error' => $txt);
    print json_encode($error);
    die();
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
$isValid = false;

while ($row = mysql_fetch_array($result)) {
    $rows[] = $row;
    if($row{'email'} === $email && $row{'password'}=== $pass){//TODO valid to
        $isValid = true;
    }
   //echo "login:".$row{'login'}." Name:".$row{'name'}."<br>";
}
$data = array('isPrime' => $isValid, 'user' => $rows[0]);
print json_encode($data);

//close the connection
mysql_close($conn);

////clingy_admin 89fVSlE$~9t}

?>
