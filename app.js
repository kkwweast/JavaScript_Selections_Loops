console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i ,+ 100; i++) {
    //if thereis a remineder at all
    if (i % 2 == 1){
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    console.log(i);
    //if i is divisible by both 1 and 3,
    if(let i =1; i <= 100; i++){
        //then print FIZZBUZZ
        console.log("FIZZBUZZ");
       
        
        //section 3
    }
}
//otherwise,
else {
   //if  the number is divisible by 5 
}
while (x > 3) {
    console.log("hello")
}
do{
    console.log("hello");
} while (x > 3);
let i = 0;
while (i <= 100) {
    //if i is odd
    if(i % 2  == 1) {
        //print i on the console
        console.log(i);
    }
    //increment
    i++;
}

//exercise 4
//creates a random number bewtween 0 and 500
let fizzDivisor = Math.round(Math.random() * (10 - 1)  + 1);
//creates a random number between 100 and 500;
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
//creates a random number between 1 and 10;
let start = Math.round(Math.random () *(  10 - 1) + 1);
//creates a random number between 100 and 1000
let end = Math.round(Math.random() * (1000 - 100) + 100 );



for (let j = start; j <= end; j++) {
    //check if its  divisible by both
    if (j % fizzDivisor == 0 && j % buzzDivisor == 0 ) {
        console.log("fizzBuzz");
        
        
    }
    //otherwiae if it was not divisible by both
}            else  {  
    //check if it was divisible by at least one of em
    if (j % fizzDivisor == 0) {
        console.log("FIZZ");
    }

    if(j % buzzDivisor == 0){
        console.log("BUZZ");
    }
    console.log("Divisors;", fizzDivisor, buzzDivisor);
    console.log("start/end", start, end);

