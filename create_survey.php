// create_survey.php
<?php
require_once 'db.php';

// Handle survey creation request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve survey data from the frontend
    $surveyTitle = $_POST['surveyTitle'];

    // Save survey data to the database (assuming the user is authenticated)
    $createdBy = 1; // Assuming the user ID of the creator is 1
    $sql = "INSERT INTO surveys (title, created_by) VALUES ('$surveyTitle', $createdBy)";

    if ($conn->query($sql) === TRUE) {
        $surveyId = $conn->insert_id;
        echo json_encode(array('id' => $surveyId, 'title' => $surveyTitle));
    } else {
        echo 'Error creating survey: ' . $conn->error;
    }
}
