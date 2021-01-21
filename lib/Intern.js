// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");

class Intern extends employee {
    constructor(name, role, id, email, github) {
        super(name, id, email);
        this.role = role;
        this.github = github;
    }
}

module.exports = Intern;