import { Employee } from "./model/employee.js";
import {Person} from "./model/person.js"; 

let person1= new Person();

person1.name="Ana Smith";
person1.dateOfBirth = "1998-12-15"; // will be converted to Date obj


let person2= new Person();

person2.name="Bob Jone";
person2.dateOfBirth = "1945-11-16"; // will be converted to Date obj


let person3= new Person();

person3.name="Carlos Slim Helu";
person3.dateOfBirth = "1976-09-24"; // will be converted to Date obj


let personArray = [person1,person2,person3];


personArray.forEach(person => {
    console.log(person.toString());
});




// Question No 2

let emp1 = new Employee();
emp1.name = "Jim Hanson"
emp1.Salary = "249,995.50";
emp1.doJob("Software Engineer");