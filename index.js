const fs = require("fs");
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const makePage = require("./lib/renderpage");
const path = require("path");
const Emp = []

const OUTPUT_DIR = path.resolve(__dirname, "output");
const pathOutPut = path.join(OUTPUT_DIR, "testoutput.html");







//Prompting questions for managers name, employee ID, email, office number

function managerPrompts() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name"
    },

    {
      type: "input",
      message: "Enter the manager's employee ID?",
      name: "id"
    },

    {
      type: "input",
      message: "what it the manager's email address?",
      name: "email"
    },

    {
      type: "input",
      message: "what is the manager's office number?",
      name: "office"
    }


  ])

  .then(function (response) {
    console.log(response)
    emp.push(new Manager(response.name, response.id, response.email, response.office))
    displayTheTeam();
  });
}

function displayTheTeam() {
  inquirer.prompt([
    {
      type: "checkbox",
      message: "Who do you need to add to your team?",
      name: "team",
      choices: ["Engineer", "Intern", "I'm done building the team"]
    }
  ])


  .then(function (response) {
    console.log(response)
    if (response.team[0] === "Engineer") {
      console.log("make and engineer")

      engineer();
    } else if (response.team[0] === "Intern") {
      console.log("build intern")
      Intern();
    } else {
      console.log("arll done writing team")
      fs.writeFile(pathOutPut, makePage(emp), function (err) {
        if (err) {
          return
        } else
        console.log("new team written")
      })
    }
  })

  .catch(function (err) {
    console.log(err);
  })
}






function engineer() {
  inquirer.prompt9([
    {
      type: "input",
      message: "what is the Engineer's name?",
      name: "name"
    },

    {
      type: "input",
      message: "What is teh Engineer's meail address?",
      name: "email"
    },

    {
      type: "input",
      message: "What is the Eingeer's Employee ID?",
      name: "id"
    },

    {
      type: "input",
      message: "Enter the engineer's GitHub User info?",
      name: "github"
    }
  ])


  .then(function (response) {
    emp.push(new Engineer(response.name, response.email, respose.id, response.githug))
  })
}

function intern() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is teh intern's name?",
      name: "name"
    },

    {
      type: "input",
      message: "What is the intern's ID number",
      name: "id"
    },

    {
      type: "input",
      message: "what's the intern's email address?",
      name: "email"
    },

    {
      type: "input",
      message: "What is the intners college name?",
      name: "school"
    }
  ])

  .then(function (response) {
    emp.push(new Intern(reponse.name, reponse.id, response.email, reponse.school))
    displayTheTeam();
  });
}

managerPrompts();

//const generatePage = require('./src/page-template');

/* const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (This is require)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Your name is required to run app!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub User information (This app requires this)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('You must enter your GitHub info!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'What would you like ot input in about section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // creates a project array if there sin't one. 


  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of your project? (This is a required field!)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description (We gotta have this!)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('A description is a gotta have field!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What language did you make this project with? (Check all that were used)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub URL link to your project. (This is required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('uh oh, we gotta have that GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });   

  */




