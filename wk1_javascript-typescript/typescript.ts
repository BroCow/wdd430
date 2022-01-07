//  Basic string example
let someString: String;


// Arrays
let myArray: Array<string> = [''];
    // or
let myOtherArray: string[] = [''];

    // DON'T
let badArray = ['']; // Doesn't prevent number from being inserted


// Functions
function myFunction(someInput: string): void { // will only allow string to be passed to it. :void means it will return nothing
    console.log('got a string!', someInput.toLocaleLowerCase())
}