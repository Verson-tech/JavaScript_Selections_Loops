console.log("Hello World!\n==========\n");

//  Exercise 1: Ignore Even
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i <=100; i++ ){

    if(i%2 !== 0){
            console.log(i);
    }
}


// Exercise 2: FIZZBUZZ
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i <=100; i++ ){
    if(i%3 == 0){
        console.log("FIZZ");
    }else if(i%5 == 0){
        console.log("BUZZ");
    }else if(i%3 == 0 && i%5 == 0){
        console.log("FIZZBUZZ")
    }
}

//Exercise 3: Repeat with While and Do/While

let x = 1;

while(x <= 100){

    if(x%3 == 0){
        console.log("FIZZ");
    }else if(x%5 == 0){
        console.log("BUZZ");
    }else if(x%3 == 0 && i%5 == 0){
        console.log("FIZZBUZZ")
    }
    x++;
}
//Do/While:
let y = 1;
do{
    let output = "";
    if(y % 3 == 0){
        output += "FIZZ";
    }if(y%5 == 0){
        output += "BUZZ";
    }
    console.log(`${y} ${output}`);
    
    y++;
}while(y <=100);

//Exercise 4: Find Value
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(value);
console.log(n);

for (let j = 0; j <= n; j++){
    if(j == value){
        console.log(`Found value ${value}`);
        break;
    }
    if(j == n){
        console.log(`Value ${value} not found within the range 1 - ${n}.`);
    }          
}

//Exercise 5: Customized FIZZBUZZ
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

console.log(`fizzDivisor ${fizzDivisor}`);
console.log(`buzzDivisor ${buzzDivisor}`);
console.log(`start ${start}`);
console.log(`end ${end}`);
for(let i = start; i <=end; i++ ){
    if(i%fizzDivisor == 0){
        console.log("FIZZ");
    }else if(i%buzzDivisor == 0){
        console.log("BUZZ");
    }else if(i%fizzDivisor == 0 && i%buzzDivisor == 0){
        console.log("FIZZBUZZ")
    }
}