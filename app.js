const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

teamArr = [];

// manager prompt
const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }
    ])
    .then(data => teamArr.push(new Manager(data.name, data.id, data.email, data.officeNumber)))
    .then(() => askRole())
}

// asks user for the next role they want to add
const askRole = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What is your new team member's role?",
            name: "role",
            choices: ["Engineer", "Intern", "No more teammates!"]
        }
    ])
    .then(data => {
        switch (data.role) {
            case "Engineer": promptEng()
                break;
            case "Intern": promptIntern()
                break;
            case "No more teammates!":
                printArr();
        }
    })
}

// engineer prompt
const promptEng = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub?",
            name: "github"
        }
    ])
    .then(data => teamArr.push(new Engineer(data.name, data.id, data.email, data.github)))
    .then(() => askRole())
}

// intern prompt
const promptIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the intern's college?",
            name: "school"
        }
    ])
    .then(data => teamArr.push(new Intern(data.name, data.id, data.email, data.school)))
    .then(() => askRole())
}

// prints array
const printArr = () => {
    writeFileAsync("team.html", render(teamArr))
}

promptManager()