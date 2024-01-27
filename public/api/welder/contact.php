<?php
$data = json_decode(file_get_contents("php://input"), true);

$to = 'biramediagroup@gmail.com';
$fullName = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$company = $data['company'];
$messageTxt = $data['message'];
$mail_subject = "Welder Service Contact Form";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: no-replay@biramedia.com" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

$message = '<table style="width:100%">
        <tr><td>Full Name: '.$fullName.'</td></tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>Phone: '.$phone.'</td></tr>
        <tr><td>Company: '.$company.'</td></tr>
        <tr><td>Message: '.$messageTxt.'</td></tr>
    </table>';

if (@mail($to, $mail_subject, $message, $headers)) {
    echo json_encode( 'The message has been sent.');
} else {
    echo json_encode( 'failed' );
}
