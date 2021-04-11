const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer); 
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
    name: "email"
}])

.then(function({name, role, id, email}) {
    let roleAnswer = "";
    if (role === "Engineer") {
        roleAnswer = "GitHub username"
    } 
    
    else if (role === "Intern") {
        roleAnswer = "school name";
    } 
    
    else {
        roleAnswer = "office phone";
    }

    inquirer.prompt([{
    message: `Enter member's $(roleAnswer)`,
    name: "roleAnswer"
},

{
    type: "list",
    message: "would you like to add another?",
    choices: [
        "yes",
        "no"
    ],
    name: "extraMembers"
}])

    .then(function({roleAnswer,extraMembers}) {
        let addedMember;
        if (role === "Engineer") {
            addedMember = new Engineer(name, id, email, roleAnswer);
        }

        else if (role === "Intern") {
            addedMember = new Intern(name, id, email, roleAnswer);
        }

        else {
            addedMember = new Manager(name, id, email, roleAnswer)
        }
    })
)
