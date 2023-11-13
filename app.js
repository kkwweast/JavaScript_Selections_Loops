

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    //if thereis a reminder at all
    if (i % 2 == 1){
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    console.log(i)
    // If i is divisiable by both 5 and 3,
    if (i % 5 == 0 && i % 3 == 0) { 
        //then print FIZZBUZZ  
        console.log("FIZZBUZZ");
    }
    //Otherwise,
    else {  
    //if the number is divisiable by 3
    if(i % 3 == 0) {  
        console.log("FIZZ"); 
    }
        // the number is divisable by 5
        if (i % 5 == 0) { 
            console.log("BUZZ");
  
    }}
    
    //Incrementor
    i++;
} while (i <= 100);
//exercise 3 section
let number = 1;

do{
    if(number % 2 !== 0) {
        console.log(number);
    }
    number++;
} while (number <= 100);


while (number <= 100) {
    if(number % 2 !== 0) {
        console.log(`${number}bologna`);
    }
    number++;
}

let i= 0;

while(i <= 100){ 
    if (i % 2 == 1){
        console.log(i, "do while");
    }
    i++
} wile (i <= 100);

//Exercise 4: Find Value

//creates a random number bewtween 0 and 500
let value = Math.round((Math.random() * 500));
//creates a random number between 100 and 500;
let n  = Math.round(Math.random() * (500 - 100) + 100);

//I need a variable to help me remember
let didFindValue = false;

for (let j = 0; j <= n; j++) {
    if(j == value) {
        console.log("Found Value");
        //End the loop before its natural or expected end
        break;
    }
}
//true/false
if(!didFindValue){   
console.log("Did not find value");
}
//Exercise 5

//creates a random number between 1 and 10;
let start = Math.round(Math.random () *(  10 - 1) + 1);
//creates a random number between 100 and 1000
let end = Math.round(Math.random() * (1000 - 100) + 100 );



for (let j = start; j <= end; j++) {
    //check if its  divisible by both numbers
    if (j % fizzDivisor == 0 && j % buzzDivisor == 0 ) {
        console.log("fizzBuzz");
        
        
    }
    //otherwise if it was not divisible by both
}           
    //check if it was divisible by at least one of em
    if (j % fizzDivisor == 0) {
        console.log("FIZZ");
    }

    if(j % buzzDivisor == 0){
        console.log("BUZZ");
    }
    console.log("Divisors;", fizzDivisor, buzzDivisor);
    console.log("start/end", start, end);

