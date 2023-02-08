'use strict';

const userName = askQuestion('what is your name ?', notEmpty());
const userGender = askQuestion('what is your gender ? male or female ?', isOneOf('male', 'female'));
const userAge = askQuestion('what is your age ?', largerThan(0));
welcoming(userName, userGender);

const questions = ['q1 ? Yes or No', 'q2 ? Yes or No', 'q3 ? Yes or No']
const answer = askMultipleQuestions(questions, isOneOf('Yes', 'No'));

console.log(answer);

// functions 
function askQuestion(qus, ...validations) {
    let ans = prompt(qus);

    while (!isAnswerValid(ans, validations) && ans !== null) {
        ans = prompt(qus + ' your answer is not valid.');
    }
    return ans
}

function isAnswerValid(ans, validations) {
    for (let i = 0; i < validations.length; i++) {
        const validationsCB = validations[i];
        if (!validationsCB(ans)) return false
    }
    return true;
}

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

function askMultipleQuestions(questions, ...validations) {
    const ans = [];
    for (let i = 0; i < questions.length; i++) {
        ans[i] = askQuestion(questions[i], ...validations)
    }
    return ans;
}

// the validation for the qus
function notEmpty() {
    return (ans) => ans.length >= 1
}

function isOneOf(...options) {
    return (ans) => {
        for (let i = 0; i < options.length; i++) {
            if (ans === options[i]) return true;
        }
        return false
    }
}

function largerThan(num) {
    return (ans) => {
        if (!isNumber(ans)) return false
        if (ans > num) return true
        return false;
    }
}

function isNumber() {
    return () => !isNaN(Number(ans))
}









