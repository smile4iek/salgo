<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];

	$to = "sitkomaksim6@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Привет, форма отправлена</p>
