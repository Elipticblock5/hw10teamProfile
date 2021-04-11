const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "firstName",
        message: "What is employee's FIRST name?",
        validate: nameQuestions => {
            if (nameQuestions) {
                return true;
            }

            else {
                console.log('Enter the FIRST name please!');
                return false;
            }
        }
    },

    {
        type: "input",
        name: "lastName",
        message: "What is employee's LAST name?",
        validate: nameQuestions => {
            if (nameQuestions) {
                return true;
            }

            else {
                console.log('Enter the LAST name please!');
                return false;
            }
    }
}

];

const userPrompts = () => {
    return inquirer.prompt(questions);
};

userPrompts()



