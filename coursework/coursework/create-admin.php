<?php
include('db_connect.php'); // Connect to your database

$username = "admin";
$password_plain = "admin123"; // Change this to your desired password
$hashed_password = password_hash($password_plain, PASSWORD_DEFAULT);

// Insert user into database
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $hashed_password);

if ($stmt->execute()) {
    echo "✅ Admin user created successfully!";
} else {
    echo "❌ Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
