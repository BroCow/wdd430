var someVar = 'var'; 
let someLet = 'let';
const someConst = 'const'; // Since it cannot be reassigned, it should be named in all caps
const SOME_CONST = 'const';

someVar = 'var'; // Stop using 'var'
someLet = 'let2'; // Use 'let' instead of 'var'
someConst = 'const2'; // cannot reassign (with a catch!)

const someConstArray = [];
someConstArray.push('update'); // Can modify 'const'