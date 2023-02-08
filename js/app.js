'use strict';

let userName = prompt('what is your name ?');
while (userName.length < 1) {
    userName = prompt('what is your name ? you should enter valid name.');
}

let userGender = prompt('what is your gender ? male or female ?');

let userAge = Number(prompt('what is your age ?'));
if (userAge <= 0 || isNaN(userAge)) {
    alert('your age is not valid number or it less or equal to 0.')
}

welcoming(userName, userGender)

// ------------------- lab 06 -----------------------

const questions = [
    'Do you love programing?',
    'Do you use youtube to learn?',
    'Do you have a project that you want to make?'
]
const answers = askMultipleQuestions(questions)
logQuestionsAndAnswers(questions, answers);

// functions 
function welcoming(userName, userGender) {
    if (!confirm('do you want to skip the welcoming message ?')) {
        switch (userGender) {
            case 'male':
                alert(`hi Mr. ${userName}.`);
                break
            case 'female':
                alert(`hi Ms. ${userName}.`);
                break;
            default:
                alert(`hi ${userName}.`);
        }
    }

}

function askYesNoQuestion(qus) {
    let ans = modifyToYesOrNo(prompt(qus + ('( Yes , No )')));
    while (!ans) {
        ans = modifyToYesOrNo(prompt(qus + ' your answer is must be ( Yes , No )'));
    }
    return ans
}

function modifyToYesOrNo(ans) {
    const acceptableYesAnswers = ['Yes', 'yes', 'Y', 'y'];
    const acceptableNoAnswers = ['No', 'no', 'N', 'n'];

    if (acceptableYesAnswers.includes(ans)) return 'Yes';
    if (acceptableNoAnswers.includes(ans)) return 'No';

    return null
}

function askMultipleQuestions(questions) {
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        answers[i] = askYesNoQuestion(questions[i])
    }
    return answers;
}

function logQuestionsAndAnswers(questions, answers) {
    for (let i = 0; i < questions.length; i++) {
        console.log(`%c${questions[i]}`, 'text-decoration: underline');
        console.log(`%c${answers[i]}`, 'font-weight: bold')
    }
}