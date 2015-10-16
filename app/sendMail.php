<?php
require "Mail.php";

header('Acces-Control-Allow-Origin: *');
  $response = array( 'success' => false );
  $formData = json_encode($_POST);
  $data     = json_decode($formData);

  $from    = $data->email;
  $name    = $data->name;
  $message = $data->message;
  $subject = $data->subject;

  if ( $name != '' && $from != '' && $message != '' && $subject != '') {
      $to      = 'fabien.desert@imie-rennes.fr';
      $subject = $subject;
      $body    =  "From:\n" . $from . "\n\n";
      $body    .=  "To:\n" . $to . "\n\n";
      $body    .= "Message:\n" . $message . "\n\n";
      $header  = "Content-type:text/html;charset=iso-8859-1" . "\r\n";
      $header  = "From: $from";

      
      $success = mail($to, $subject, $body, $header);

      if ( $success ) {
          $response[ 'success' ] = true;
      }
  }

  echo json_encode( $response );
?>