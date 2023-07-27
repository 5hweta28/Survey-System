// survey_responses.php
<?php
require_once 'db.php';

// Handle survey responses submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve survey responses from the frontend
    $surveyId = $_POST['surveyId'];
    $userId = $_POST['userId'];

    // Save survey responses to the database
    $sql = "INSERT INTO responses (survey_id, question_id, user_id, response) VALUES ";

    $responses = $_POST['responses'];
    foreach ($responses as $questionId => $response) {
        $sql .= "($surveyId, $questionId, $userId, '$response'),";
    }

    $sql = rtrim($sql, ","); // Remove the trailing comma
    if ($conn->query($sql) === TRUE) {
        echo 'Survey responses submitted successfully';
    } else {
        echo 'Error submitting survey responses: ' . $conn->error;
    }
}
