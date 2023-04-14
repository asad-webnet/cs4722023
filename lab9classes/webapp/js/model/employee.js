import { Person } from "./person.js";

class Employee extends Person {

    Salary
    hireDate

    doJob(title) {

        console.log(`${this.name} is a ${title} who earns ${this.Salary}`)

    }

    get Salary() {
        return this.Salary
    }

    set Salary(salary) {
        this.salary = salary;
    }

}

export {Employee}