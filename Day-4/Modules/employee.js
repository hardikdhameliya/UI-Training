export default class Employee {
    constructor(id, name) { // constructor is a special method which automatically execute when object is created.
        console.log("In constructor of employee")
        this.id = id
        this.name = name
    }

    display() {
        console.log("Inside display")
        console.log("Id is " + this.id + " name is " + this.name)
        console.log(`id is ${this.id} name is ${this.name}`) // this is template string added in JS 6. Only works with ``
    }
}

function test() {
    console.log("this is test function")
}

let i = 10

// export default Employee;
export { test as t, i }


