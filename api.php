<?php
// Database configuration
$host = 'localhost';
$username = 'root';
$password = 'p@rs@nt@021';
$database = 'theory';

// Connect to MySQL server
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare the statement
    $stmt = $conn->prepare("SELECT * FROM user WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);

    // Execute the statement
    $stmt->execute();

    // Store the result
    $result = $stmt->get_result();

    if ($result && $result->num_rows > 0) {
        echo "Login successful";
    } else {
        echo "Login failed";
    }

    // Close the statement
    $stmt->close();
} else {
    echo "Invalid request method";
}

// Close the connection
$conn->close();
?>
