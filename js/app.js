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






