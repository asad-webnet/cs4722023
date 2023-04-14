 class Person {
    name
    dateOfBirth

    get name() {
        return this.name;
    }

    set name(n) {
        this.name = "" + n;
    }

    get dob() {
        return this.dateOfBirth
    }

    set dob(date) {
        this.dateOfBirth = new Date(date);
    }

    toString() {
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`
    }
}


export {Person}