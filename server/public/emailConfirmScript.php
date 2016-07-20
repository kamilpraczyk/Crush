 <?php
function error($txt){
    echo '<div class="error">Sorry, activation fail.</div>';
    die();
}
       
function success(){
    echo '<div class="success">Success. Your account has been activated, you can now login.</div>';
    echo '<a class="login-link" href="http://www.clingykoala.com">Click to login</a>';
    die();
}

if(!empty($_GET['p']) && !empty($_GET['l'])){


$email = urldecode($_GET["l"]);
$pass = urldecode($_GET["p"]);

$servername = "localhost";
$username = "clingy_viewer"; 
$password = "clingy_viewer_pass_!";
$db = "clingy_crush";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
!$conn && error("Connection failed: ". mysql_error());


//update
$sql = "UPDATE Users SET active='1' WHERE email='".$email."' AND password='".$pass."' AND active='0';";
if (mysqli_query($conn, $sql)) {
    success();
} else {
    error("Error updating record: " . mysqli_error($conn));
}

//close the connection
mysqli_close($conn);

}else{
    error("Empty request");
}

?>