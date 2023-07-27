// login.php
<?php
require_once 'db.php';

// Handle user login request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve login credentials from the frontend
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate credentials (not secure in this example, use password hashing in production)
    if ($username === 'admin' && $password === 'admin') {
        $user = array('id' => 1, 'name' => 'Admin');
        echo json_encode($user);
    } else {
        echo 'Invalid credentials';
    }
}
