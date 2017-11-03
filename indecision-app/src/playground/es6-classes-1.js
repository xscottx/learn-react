// setup constructor to take name and age (default to 0)
class Person {
    // parameter 'blah = bleh' will set default value in constructor
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

    getGreeting() {
        // using template strings, ES6
        return `Hi. I am ${this.name}!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    
    hasMajor() {
        // return the boolean response to value
        // !'' returns true meaning, empty, and !!'' returns false, meaning not empty
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` I am in ${this.homeLocation}.`;
        }
        return greeting;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }
}

const other = new Student('Andrew Mead', 26, 'Computer Science');
console.log(other.getDescription());
console.log(other.hasMajor());

const stud1 = new Student('HV', 21);
console.log(stud1.getDescription());
console.log(stud1.hasMajor());

const me = new Traveler('Honag V', 21, 'Plano, TX');
console.log(me.getGreeting());