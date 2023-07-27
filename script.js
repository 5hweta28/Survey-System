// script.js
let currentUser = null;
let currentSurvey = null;

function showDashboard() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
}

function showSurvey(survey) {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('survey').style.display = 'block';
  document.getElementById('surveyQuestion').textContent = survey.title;

  // Assuming survey questions are loaded from the backend
  // and added to the survey object
  let optionsHtml = '';
  survey.questions.forEach((question) => {
    if (question.question_type === 'multiple_choice') {
      optionsHtml += `<label>${question.question_text}</label><br>`;
      question.options.forEach((option) => {
        optionsHtml += `<input type="radio" name="question_${question.id}" value="${option}">${option}<br>`;
      });
    } else if (question.question_type === 'open_ended') {
      optionsHtml += `<label>${question.question_text}</label><br>`;
      optionsHtml += `<textarea name="question_${question.id}" rows="4"></textarea><br>`;
    } else if (question.question_type === 'rating_scale') {
      optionsHtml += `<label>${question.question_text}</label><br>`;
      for (let i = 1; i <= 5; i++) {
        optionsHtml += `<input type="radio" name="question_${question.id}" value="${i}">${i}<br>`;
      }
    }
  });

  document.getElementById('surveyOptions').innerHTML = optionsHtml;
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send login credentials to the backend for authentication
  // and retrieve user data if successful

  // Assuming login is successful and user data is retrieved
  currentUser = { id: 1, name: 'John Doe' };
  showDashboard();
}

function createSurvey() {
  const surveyTitle = document.getElementById('surveyTitle').value;

  // Send survey data to the backend for saving

  // Assuming the survey is saved successfully
  const newSurvey = { id: 1, title: surveyTitle, questions: [] };
  currentSurvey = newSurvey;
  showSurvey(newSurvey);
}

function submitSurvey() {
  const formData = new FormData();

  // Collect user responses from the survey form
  currentSurvey.questions.forEach((question) => {
    const response = document.querySelector(`input[name="question_${question.id}"]:checked`) || document.querySelector(`textarea[name="question_${question.id}"]`);
    if (response) {
      formData.append(`response_${question.id}`, response.value);
    }
  });

  // Send user responses to the backend for saving

  // Assuming the responses are saved successfully
  alert('Survey submitted successfully!');
  showDashboard();
}
