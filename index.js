const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const theEmployees = [];

function initApp () {
    runHtml();
    appendMember();
}

function appendMember() {
    inquirer.prompt([{
        message: "Enter member name:",
        name: "name"
    },

    {
    type: "list",
    message: "choose a role",
    choices: [
        "Manager",
        "Engineer",
        "Intern",
    ],
    name: "role"
},

{
    message: "Enter member's ID:",
    name: "id"
},
{
    message: "Enter members email:",
    name: "email",
}])

