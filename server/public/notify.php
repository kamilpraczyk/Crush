   
<?php header('Access-Control-Allow-Origin: *');

// Check to see there are posted variables coming into the script
if ($_SERVER['REQUEST_METHOD'] != "POST"){
    mail("kamil.praczyk@gmail.com", "IPN - No Post Variables", '', "From: www.clingykoala.com");
    die("No Post Variables");
}
// Initialize the $req variable and add CMD key value pair
$req = 'cmd=_notify-validate';
// Read the post from PayPal
foreach ($_POST as $key => $value) {
    $value = urlencode(stripslashes($value));
    $req .= "&$key=$value";
}

// Now Post all of that back to PayPal's server using curl, and validate everything with PayPal
// We will use CURL instead of PHP for this for a more universally operable script (fsockopen has issues on some environments)
//$url = "https://www.sandbox.paypal.com/cgi-bin/webscr";
$url = "https://www.paypal.com/cgi-bin/webscr";
$curl_result = $curl_err = '';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/x-www-form-urlencoded", "Content-Length: " . strlen($req)));
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
$curl_result = @curl_exec($ch);
$curl_err = curl_error($ch);
curl_close($ch);

$req = str_replace("&", "\n", $req);  // Make it a nice list in case we want to email it to ourselves for reporting

$email = urldecode($_POST['invoice']);
$date = $_POST['custom'];

// Check that the result verifies
if (strpos($curl_result, "VERIFIED") !== false) {
    $req .= "\n\nPaypal Verified OK";
    $req .= "\n\nEmail in database: ".$email;
    $req .= "\n\nValid: ".$date;
} else {
   echo ' kill not verified ';
    $req .= "\n\nData NOT verified from Paypal!";
    $req .= "\n\nEmail in database: ".$email;
    $req .= "\n\nValid: ".$date;
    mail("kamil.praczyk@gmail.com", "IPN interaction not verified", $req, "From: www.clingykoala.com");
    exit();
}


if(!empty($_POST)){


    // Check number 1 ------------------------------------------------------------------------------------------------------------
    if ($_POST['payment_status'] != "Completed") {
        // Handle how you think you should if a payment is not complete yet, a few scenarios can cause a transaction to be incomplete
        mail("kamil.praczyk@gmail.com", "IPN payment_status not completed", $req, "From: www.clingykoala.com");
    }


    $servername = "localhost";
    $username = "clingy_viewer"; 
    $password = "clingy_viewer_pass_!";
    $db = "clingy_crush";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $db);
    if(!$conn) {
        mail("kamil.praczyk@gmail.com", "IPN - Error Connection to server, (please manualy correct) ", $req, "From: www.clingykoala.com");
        die();
    }


    //update
    $sql = "UPDATE Users SET valid_to='".$date."' WHERE email='".$email."';";
    if (!mysqli_query($conn, $sql)) {
        mail("kamil.praczyk@gmail.com", "IPN - Error write to database - when paypal success payment!  (please manualy correct)", $req, "From: www.clingykoala.com");
        die();
    }

    //close the connection
    mysqli_close($conn);

    // Place the transaction into the database
    // Mail yourself the details
    mail("kamil.praczyk@gmail.com", "IPN - NORMAL RESULT YAY MONEY!", $req, "From: www.clingykoala.com");

}else{
    mail("kamil.praczyk@gmail.com", "IPN - no post data", $req, "From: www.clingykoala.com");
    die();
}

?>