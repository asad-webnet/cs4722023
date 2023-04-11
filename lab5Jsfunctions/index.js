// W1D5 – Lab Assignment 5 / Homework
// Implement code for the following JavaScript functions, and be sure to use "use strict";


// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-thenelse construct available in Javascript.
const max = (a,b) => {
    return a>b ? a : b;
}


// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
const maxOfThree = (a,b,c) => {
    return a > b  ? 
            // a is greater
            (a > c ? a : c )
            // b is greater
            : b> c ? b : c;
}


// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = (char) => {
    return ( char === 'a' || char ==='e' || char==='i' || char==='o' || char==='u');
}


// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an
// input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)

const sum = (numArray) => {
    let total = 0;
    numArray.forEach(number => {
        total+=number;
    });

    return total;
}

const multiply = (numArray) => {
    let total = 1;
    numArray.forEach(number => {
        total*=number;
    });

    return total;
}

// 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".

const reverseString = (string )=> {
    let reverseString = "";

    for (let index = string.length-1; index > -1; index--) {
        const element = string[index];
        reverseString += "" + element;        
    }

    return reverseString;
}

// 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

const findLongestWord = (arrayOfWords) => {

    let max = -1;

    arrayOfWords.forEach(word => {
        
        max = word.length > max ? word.length : max;

    });
    
    return max;

}

// 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
// containing only those words that were longer than i characters.

const filterLongWords = (arrayOfWords,i) => {

    let newArray = [];

    arrayOfWords.forEach(word => {
        
        word.length > i ? newArray.push(word) : "";

    });
    
    return newArray;


}

// 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
// computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
// NOT use any explicit looping construct; instead use functional programming style/approach.

const computeSumOfSquares = (numberArray) => {
    return numArray.map(num => num*num).reduce((a,b) => a+b);
}

// 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds
// and prints only the numbers which are odd.

const printOddNumbersOnly = (numArray) => {

    let oddArray = numArray.filter(n => n%2!=0);

    oddArray.forEach(num => {
        console.log(num);
    });

}


// 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
// and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 +4^4 = 20.

    const computeSumOfSquaresOfEvensOnly = (numArray) => {

        return numArray
                .filter(num => num%2==0)
                .map(num => num*num)
                .reduce((a,b) => a+b);

    }

// 11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
// above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
// functional programming style/approach.

const sumFunctional = (arrayNumbers) => {

    return arrayNumbers.reduce(((a,b) => a+b),0);

}

const multipleFunctional = (arrayNumbers) => {

    return arrayNumbers.reduce(((a,b) => a*b),1);


}

// 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers
// and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should
// return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)

const findSecondBiggest = (numArray) => {
    let max=numArray[0];
    let secondMax=numArray[0];

    numArray.forEach(num => {
        max = num > max ? num : max;
    });

    numArray.forEach(num => {

        secondMax = (num > secondMax  ? (num < max ? num : secondMax):secondMax ); 

    });

    return secondMax


}

// 13. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
// and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
// a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
// output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
// 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

const printFibo = (n,a,b) => {

    let nextNumber = 0;

    if(n==0) return;

    // Printing first two numbers
    console.log(a);
    if(n==1) return;
    console.log(b);
    if(n==2) return;

    // Continuing after 2 numbers
    for (let index = 3; index <= n; index++) {
        
        nextNumber = a+b;
        console.log(nextNumber);
        a=b;
        b=nextNumber;
    }
}
// n = 3
// a  , b  , nN
// 0  , 1  , 0

// nN = a+b;=> 8

// 14. Use Array Methods: filter, map, reduce, etc to implement functions below:
// 1. Create a function using function declaration named sum with one parameter of Array type, the returned
// result is the sum of all elements which are greater than 20.
// 2. Create a function using function expression named getNewArray with one parameter of String Array,
// return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.
// Please submit your code as a single zip file attachment to Sakai and also push it to your github repository.
// //-- Enjoy! --//

const funcGreaterTwenty = (numArray) => {

    return numArray.filter(num => num > 20).reduce((a,b) => a+b,0);

}

const getNewArray = (stringArray) => {

    return stringArray.filter(string => string.length >= 5 && string.includes("a"));
               

}