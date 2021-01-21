// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./Employee");

class Manager extends employee {
    constructor(name, role, id, email, school) {
        super(name, id, email);
        this.role = role;
        this.school = school;
    }
}

module.exports = Manager;