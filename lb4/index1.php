<?php 
 if (!empty($_POST)) {
  setcookie('name', $_POST['name']);
  header("Location:index1.php");
 } else {
  echo "Hello, ".$_COOKIE['name'];
  echo ", welcome to our website";
 }
?>