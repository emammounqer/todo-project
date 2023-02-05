'use strict';

class User {
    name;
    gender;
    age;

    constructor() {
        this.getName()
        this.getGender();
        this.getAge();

        if (!confirm('do you want to skip the welcoming message ?'))
            this.welcoming();
    }

    getName() {
        let userName = prompt('what is your name ?');
        while (userName.length < 1) {
            userName = prompt('what is your name ? you should enter valid name.');
        }
        this.name = userName;
    }

    getGender() {
        let userGender = prompt('what is your gender ? male or female ?');
        while (!(userGender === 'male' || userGender === 'female')) {
            userGender = prompt('you should enter male or female.');
        }
        this.gender = userGender;
    }

    getAge() {
        let userAge = Number(prompt('what is your age ?'));
        while (userAge <= 0 || isNaN(userAge)) {
            userAge = Number(prompt('your age should be valid number and larger than 0'));
        }
        console.log(userAge);
        this.age = userAge;
    }

    welcoming() {
        alert(`hi ${this.gender === 'male' ? 'Mr.' : 'Ms.'} ${this.name}.`);
    }

}

const user = new User()


