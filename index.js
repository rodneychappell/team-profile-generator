const inquirer = require("inquirer");
const Manager = require("");
const Engineer = require("");
const Intern = require("");
const generateSite = require("");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const path = require("path");
const Choices = require("inquirer/lib/objects/choices");
const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee id?",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Enter your employee id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Enter your email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your officeNumber?",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Enter your officeNumber!");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      console.log(answer);
      const manager = new Manager(
        answers.name,
        answer.employeeId,
        answer.email,
        answer.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please choose which you like to continue with:",
        choices: ["add Engineer", "add Intern"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add Engineer":
          promptEngineer();
          break;
        case "add Intern":
          promptIntern();
          break;
      }
    });
};

const promptEngineer = () => {
  console.log(`
      - Add New Engineer -    
    `);

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of Engineer?",
      validate: (engineerName) => {
        if (engineerName) {
          return true;
        } else {
          console.log("Enter the name of Engineer!");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is your employee id?",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Enter your employee id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Enter your email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub?",
        validate: (githubUsername) => {
          if (githubUsername) {
            return true;
          } else {
            console.log("Enter your GitHub username!");
            return false;
          }
        },
      },
  ]).then((answer) => {
    console.log(answer);
    const engineer = new Engineer(
      answers.name,
      answer.employeeId,
      answer.email,
      answer.githubUsername
    );
    teamMembers.push(engineer);
    promptMenu();
  })
};

const promptIntern = () => {
    console.log(`
        - Add New Intern -    
      `);
  
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of Intern?",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Enter the name of Intern!");
            return false;
          }
        },
      },
      {
          type: "input",
          name: "employeeId",
          message: "What is your employee id?",
          validate: (employeeId) => {
            if (employeeId) {
              return true;
            } else {
              console.log("Enter your employee id!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              console.log("Enter your email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "githubUsername",
          message: "What is your GitHub?",
          validate: (githubUsername) => {
            if (githubUsername) {
              return true;
            } else {
              console.log("Enter your GitHub username!");
              return false;
            }
          },
        },
    ]).then((answer) => {
      console.log(answer);
      const intern = new Intern(
        answers.name,
        answer.employeeId,
        answer.email,
        answer.githubUsername
      );
      teamMembers.push(intern);
      promptMenu();
    })
  };

  promptManager();