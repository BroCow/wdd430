// Primitives
let age: number;
age =12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

//  More complex types
let hobbies: Array<string>;
hobbies=['Sports', 'Cooking'];


let person: { // sets type assignment, defining structure
    name: string;
    age: number;
};
person = {
    name: 'Max',
    age: 32
}

let people: {
    name: string;
    age: number;
}[]; // combines object and array as types - creates array of objects

/* Type inference */
let course = 'The course';  // automatically sets type of string (inference)

/* Working with Union Types */
let unionCourse: string | number;
unionCourse = 123;

/* Assigning Type Aliases */
type Individual = {
    name: string;
    age: number;
}

let dude: Individual;
let lady: Individual[];

/* Function and Types */
function add(a:number, b:number) {
    return a + b;  // infers that a number type will be returned
}

function printTest (value: any) {
    console.log(value);  // no return specified, so special return value is :void
}

/* Understanding Generics */
function insertAtBeginning<T> (array: T[], value: T) {  // 'T' tells it to look at the value and infer
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);  // [-1, 1, 2, 3]
    // updatedArray inferred to be an array of numbers instead of 'any'

/* Classes & Typescript */
class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];  // can set to private so it is not accessible outside of class

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName:string) {
        this.courses.push(courseName);
    }
}

const student1 = new Student('Max', 'Schwarts', 32, ['Angular', 'English']);
student1.enroll('Full-Stack');

/* Working with Interfaces */
interface Human {  // Can also use type keyword, but interfaces can be implemented by classes
    firstName: string;
    age: number;

    greet: () => void;
}
let max: Human;
max = {
    firstName: 'Max',
    age: 32, 
    greet() {
        console.log('Hello');
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;
    greet: () => void;
    // all of the above auto-fill because they are required by interface of Human
}

/* Configuring Typescript configuration */
    // Watch out for "strict": true