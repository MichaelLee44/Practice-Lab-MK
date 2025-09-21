//Task 1
let quantitylabel = document.querySelector("#quantitylabel");
let display1 = document.querySelector("#task1display");

function getQuantityTask1(mode, quantity)
{
    switch (mode)
    {
        case 1:
            let number = prompt("Please enter a number:");
            if (isNaN(number)) 
            {
                alert("You did not enter a valid number! Please try again.");
                return getQuantityTask1(1);
            }
            else 
            {
                number = parseFloat(number);
                return number;
            };
            break;
        case 2:
            let percent = prompt("What percent of " + quantity + " would you like to see?");
            if (isNaN(percent)) 
            {
                alert("You did not enter a valid number! Please try again.");
                return getQuantityTask1(2, quantity)
            }
            else 
            {
                percent = parseFloat(percent);
                return percent;
            };
            break;
    }
};

let firstValue = getQuantityTask1(1);
let secondValue = getQuantityTask1(2, firstValue)/100;
quantitylabel.innerHTML = "Quantity: " + firstValue;
display1.innerHTML = secondValue*100 + "% of " + firstValue + " is " + (firstValue*secondValue)

//Task 2

let gradeLabel = document.querySelector("#gradeLabel");
let task2display = document.querySelector("#task2display");

function getQuantityTask2(){
    let number = prompt("Please enter your grade (value between 1 and 100):");
    if (isNaN(number)) 
    {
        alert("You did not enter a valid number! Please try again.");
        return getQuantityTask2();
    }
    else 
    {
        number = parseInt(number)
        if (number < 1)
        {
            alert("Your value is to low, please enter a number between 1 and 100.");
            return getQuantityTask2();
        }
        else if (number > 100)
        {
            alert("Your value is to high, please enter a number between 1 and 100.");
            return getQuantityTask2();
        }
        else 
        {
            return number;
        }
    };
}

const convertToLetterGrade = (number) => 
{
    //with use of if and else
    // if (number>=91)
    // {
    //     return "A";
    // } else if (number >= 81)
    // {
    //     return "B";
    // } else if (number >= 71)
    // {
    //     return "C";
    // } else if (number >= 61)
    // {
    //     return "D";
    // } else if (number <= 60)
    // {
    //     return "F"
    // }

    //using a switch to determine letter grade
    switch (true)
    {
        case number >= 91:
            return "A"
            break;
        case number >= 81:
            return "B"
            break;
        case number >= 71:
            return "C"
            break;
        case number >= 61:
            return "D"
            break;
        case number <=  60:
            return "F"
            break;
    }
}

let numberGrade = getQuantityTask2();
let letterGrade = convertToLetterGrade(numberGrade);
console.log(`Number Grade: ${numberGrade}\nLetter Grade: ${letterGrade}`);

gradeLabel.innerHTML = "Grade: " + numberGrade;
task2display.innerHTML = "A grade of " + numberGrade + " is equivalent to a letter grade of " + letterGrade + ".";

//task 3

function getProf()
{
    return(prompt("What professor is punishing you?"));
};

let prof = getProf();
document.querySelector("#prof").innerHTML = "Professor: " + prof;

function getLine()
{
    return(prompt("What sentence are you requested to write?"));
};

let line = getLine();

function getNumberOfLines()
{
    let response = prompt("How many times do you need to write this sentence?");
    if (isNaN(response))
    {
        alert("You did not enter a valid number, please enter a number");
        return getNumberOfLines();
    }
    else
    {
        return(parseInt(response));
    }
};

let numberOfLines = getNumberOfLines();

function logLines(line, numberOfLines)
{
    for(i = 1; i <= numberOfLines; i++)
    {
        console.log(`${i}. ${line}\n`);
    };

    return;
}

logLines(line, numberOfLines);

//task 4

let task4display = document.querySelector("#task4list")

function showLine(line, numberOfLines)
{
    let count = 1;
    while(count<=numberOfLines)
    {
        task4display.innerHTML += `<li> ${line} </li>\n`;
        count++;
    };

    return;
};

showLine(line, numberOfLines);

//task 5

let task5display = document.querySelector("#task5list")

const showLineType2 = (line, numberOfLines) =>
{
    let count = 1;
    while(count<=numberOfLines)
    {
        task5display.innerHTML += `<li> ${line} </li>\n`;
        count++;
    };

    return;
};

showLineType2(line, numberOfLines);

//task 6

let display = document.querySelector("#task6list");

//First Strategy
for(factor = 1; factor <= 12; factor++)
{
    for(factor2 = 1; factor2 <= 12; factor2++)
    {
        display.innerHTML += `<li>${factor} X ${factor2} = ${factor*factor2}</li>`;
    };
};
display.innerHTML = "";

//Second Strategy
function createTables(factor)
{    
    for(factor2 = 1; factor2 <= 12; factor2++)
    {
        display.innerHTML += `<li>${factor} X ${factor2} = ${factor*factor2}</li>`;
    };
}

for(factor = 1; factor <= 12; factor++)
{
    createTables(factor);
}

display.innerHTML = "";

//Third Strategy
const createTablesFor = (factor, factor2) => //creates times tables for a range of numbers, factor - factor2
{
    for(factor; factor <= factor2; factor++)
    {
        createTables(factor);
    }
};

createTablesFor(1, 12);
// createTablesFor(6, 11); //tables between 6 and 11

//task 7

/*
Hoisting is the concept of using something before it has been declared/defined in code i.e "hoisting"
something upwards. This can be done with both functions and variables. 

For a variable const and let do not work with hoisting but simply using var in their place will allow for hoising as seen below:

var variable = 0;

For a function hoisting is only possible with a classic function declaration as seen below:

function example()
{
    return
}
*/

variable = hoistedFunction(); // double hoisting action!!
console.log(variable);

var variable = 0;

function hoistedFunction()
{
    return "I have been hoisted.";
};

/*
    Hoisting has been solved by the introduction for newer techniques/methods which have made
    the techniques which are hoistable pretty much depricated. For variables this is the use of 
    let and const instead of var for declaring them. For functions this is the use of arrow functions
    or function expressions instead of classic function declarations.
*/