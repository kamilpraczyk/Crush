   
<?php header('Access-Control-Allow-Origin: *');

$url =  urldecode($_GET["u"]);
$email = urldecode($_GET["l"]);
$pass = urldecode($_GET["p"]);
$name = urldecode($_GET["n"]);

$to      = $email; 
$subject = 'Verification'; 
$message = '
 
Thanks for signing up, '.$name.'!
Your account has been created, you can login with the following credentials after you have activated your account by pressing the url below.
 
------------------------
Login: '.$email.'
Password: '.$pass.'
------------------------
 
Please click this link to activate your account:
'.$url.'
 
'; // Our message above including the link
                     
$headers = 'From:clingykoala.ask@gmail.com' . "\r\n"; // Set from headers
mail($to, $subject, $message, $headers); // Send our email

$isSuccess = TRUE;
$success = array('success' => $isSuccess, 'email' => $email, 'name'=> $name, 'url'=> $url);
print json_encode($success);
die();
?>
