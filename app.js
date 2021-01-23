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

// manager
const promptManager = () =>
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
    ]);

promptManager()
    .then(data => teamArr.push(new Manager(data.name, data.id, data.email, data.officeNumber)))
    .then(() => askRole())

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

const printArr = () => {
    writeFileAsync("team.html", render(teamArr))
}

// ask what role next


// promptManager().then(askRole())
// push object to end of teamArr

// function render()

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
