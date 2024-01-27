<?php
$data = json_decode(file_get_contents("php://input"), true);


$to = 'biramediagroup@gmail.com';

$address = $data['address'];
$apt = $data['apt'];
$budget = $data['budget'];
$city = $data['city'];
$email = $data['email'];
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$leadChannel = $data['leadChannel'];
$messageTxt = $data['message'];
$phone = $data['phone'];
$serviceName = $data['serviceName'];
$serviceType = $data['serviceType'];
$state = $data['state'];
$whenToServe = $data['whenToServe'];
$zip = $data['zip'];

$mail_subject = "Welder Service Quote Form";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $email . "\r\n";
$headers .= "Reply-To: no-replay@biramedia.com" . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

$message = '<table style="width:100%">
                <tr><td>First name: '. $firstName .' </td></tr>
                <tr><td>Last name: '. $lastName .' </td></tr>
                <tr><td>Phone: '. $phone .' </td></tr>
                <tr><td>Email: '. $email .' </td></tr>
                <tr><td>Address: '. $address .' </td></tr>
                <tr><td>Apt: '. $apt .' </td></tr>
                <tr><td>City: '. $city .' </td></tr>
                <tr><td>State: '. $state .' </td></tr>
                <tr><td>zip: '. $zip .' </td></tr>
                <tr><td>Service name: '. $serviceName .' </td></tr>
                <tr><td>When to serve: '. $whenToServe .' </td></tr>
                <tr><td>Service type: '. $serviceType .' </td></tr>
                <tr><td>Lead channel: '. $leadChannel .' </td></tr>
                <tr><td>Budget: '. $budget .' </td></tr>
                <tr><td>Message: '. $messageTxt .' </td></tr>
        </table>';

if (@mail($to, $mail_subject, $message, $headers)) {
    echo json_encode( 'The message has been sent.');
} else {
    echo json_encode( 'failed' );
}
