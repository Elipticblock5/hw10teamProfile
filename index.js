const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "firstName",
        message: "what is employee's FIRST name?",
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
]



