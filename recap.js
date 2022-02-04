
// 1. let and const
const hubby = 'Omor sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';
//2. default parameter
function maxNumber (num){
   
    const max = Math.max(...num);
    return max;

}

const result = maxNumber([1,3,45,87,34])
console.log(result)

//3.template string
const myNotes = `I am monjnu of ${hubby}. I dont have a ${phone}`;

console.log(myNotes)

//4. arrow function 
const square = x => x * x;

const fol = square(9);
console.log(fol)