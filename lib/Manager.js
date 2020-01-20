const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager")
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
// const e = new Manager("Foo", 1, "test@test.com", 100);
// console.log(e)
module.exports = Manager;