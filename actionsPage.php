    <?php
// actionsPage.php

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the form data has been sent via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize data from the form
    $fname = htmlspecialchars($_POST['fname']);
    $myPassword = htmlspecialchars($_POST['myPassword']);

    // Display the retrieved data
    echo "First Name: " . $fname . "<br>";
    echo "Input Password: " . $myPassword;
} else {
    // If no data received
    echo "No data received.";
}
?>
