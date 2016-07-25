   
<?php header('Access-Control-Allow-Origin: *');

$email = urldecode($_GET["l"]);
$pass = urldecode($_GET["p"]);
$name = urldecode($_GET["n"]);

$to      = $email; 
$subject = 'Clingy Koala English - registration'; 
$message = '
 
Thanks for signing up, '.$name.'!

Your account has been created, you can login with the following credentials.
 
Website: http://www.clingykoala.com
------------------------
Login: '.$email.'
Password: '.$pass.'
------------------------

  
';
                     
$headers = 'From:clingykoala.ask@gmail.com' . "\r\n"; // Set from headers
mail($to, $subject, $message, $headers); // Send our email

$isSuccess = TRUE;
$success = array('success' => $isSuccess, 'email' => $email, 'name'=> $name, 'url'=> $url);
print json_encode($success);
die();

?>
