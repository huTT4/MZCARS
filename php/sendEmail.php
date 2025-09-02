<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$idCar = $_POST['carId'];

$mail = new PHPMailer(true);

try {
  $secret = '6LemRborAAAAAKgXpY2kaQA0A3k3IrQbQGQkohIu';
  $response = $_POST['g-recaptcha-response'];
  $remoteip = $_SERVER['REMOTE_ADDR'];

  $url = 'https://www.google.com/recaptcha/api/siteverify';
  $data = array(
    'secret' => $secret,
    'response' => $response,
    'remoteip' => $remoteip
  );

  $options = array(
    'http' => array(
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($data),
    ),
  );

  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);
  $resultJson = json_decode($result);

  $fromAddress = 'zm3158589525lt@bpauto.lv';
  $toAddress = 'mzcars@mzcars.lv';

  $mail = new PHPMailer();
  $mail->addAddress($toAddress, '');
  $mail->setFrom($fromAddress, 'Запрос MZ Cars');

  $mail->addReplyTo($email, $name);

  $mail->CharSet = 'utf-8';
  $mail->isHTML(true);

  $mail->Subject = 'Запрос MZ Cars';
  $mail->Body = '
                            <p><b>Имя: </b>' . $name . '</p>
                            <p><b>Номер телефона: </b> ' . $phone . '</p>
                            <p><b>Адрес эл.почты: </b> ' . $email . '</p>
                            <p><b>Арт. автомобиля: </b>' . $idCar . '</p>';

  if ($resultJson->success != true) {
    // Неуспех, reCAPTCHA не пройдена
    echo 'captcha';
  } else {
    $mail->send();

    echo 'success';
  }


} catch (Exception $e) {

  echo 'failed';

}

?>

