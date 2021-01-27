# Employee Summary

[Demo](https://drive.google.com/file/d/1oQQVfbCexIaHsc3O9pRnEgJlKSFZLH_V/view)

This app was made to help organize employee teams! To use the application you need to open the terminal and type "npm install". This will install all of the dependencies that the application relies on. After that you can type "node app.js" to enter in the team manager's information. After that the user can choose between entering in a engineer, intern or not to add anymore characters. When that prompt is selected it will ask questions unique to the role. When you are done adding you can choose "No more teammates!" and all of the team members will be written to a team.html file! Open this and the user see all of the information they put in.

## Snips of code

Below is a code snippet of the askRole function. When this function is excecuted a prompt will appear and allow the user to choose between the choices. When that choice is chosen it will be passed to the data placeholder and a switch function will excecute the correct function to proceed.

```
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
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [node.js](https://nodejs.org/en/)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [npm](https://www.npmjs.com/)

## Authors

* Peter Ting

- [Link to Github](https://github.com/Pting1995)
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)
- [Link to Portfolio](https://pting1995.github.io/Portfolio-mk2/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Thank you to UC Berkeley's Extension Bootcamp for giving me the opportunity to work on this project!