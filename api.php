<?php
// Database configuration
$host = 'localhost';
$username = 'root';
$password = '@@021';
$database = 'theory';

// Connect to MySQL server
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Rest of the code goes here
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Perform user authentication
    $sql = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        // Login successful
        echo "Login successful";
    } else {
        // Login failed
        echo "Login failed";
    }
} else {
    // Invalid request method
    echo "Invalid request method";
}

$conn->close();
?>
