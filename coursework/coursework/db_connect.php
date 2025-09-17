<?php
$host = "localhost";
$username = "root"; // default for XAMPP
$password = "";     // default for XAMPP
$database = "sweet_delight_db";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
