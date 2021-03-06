// **Find PI to the Nth Digit** - Enter a number and have the program generate PI up to that many decimal places. 
// Keep a limit to how far the program will go.

var toNthDigitOfPi = function(number) {
	var piArr = [];

	piArr = JSON.stringify(Math.PI).split('');

	var index = number + 2;

	if(typeof number === 'number') {
		if(number === 0) {
			return 3;
		}else if(index >= piArr.length) {
			return "Input goes past available decimal places";
		}else {
			var resultArr = [];
			var result;

			resultArr = piArr.slice(0, index);

			result = resultArr.join('');

			return result;
		}
	}else {
		return "Input is not a number";
	}
};

// **Find e to the Nth Digit** - Just like the previous problem, but with e instead of PI. 
// Enter a number and have the program generate e up to that many decimal places. 
// Keep a limit to how far the program will go.

var toNthDigitOfE = function(number) {
	var eArr = [];

	eArr = JSON.stringify(Math.E).split('');

	var index = number + 2;

	if(typeof number === 'number') {
		if(number === 0) {
			return 2;
		}else if(index >= eArr.length) {
			return "Input goes past available decimal places";
		}else {
			var resultArr = [];
			var result;

			resultArr = eArr.slice(0, index);

			result = resultArr.join('');

			return result;
		}
	}
};

// **Fibonacci Sequence** - Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number.

var fibonacciSeq = function(n) {
	var result;

	for (var i = 0; i < n; i++) {
		var x1, tempX, x2;

		if (i === 0) {
			x1 = 1;
			x2 = 0;
		} else {
			tempX = x1;
			x1 = x1 + x2;
			x2 = tempX;
			result = x1;
		}
	}

	return result;
};

// **Prime Factorization** - Have the user enter a number and find all Prime Factors (if there are any) and display them.

var primeFactorization = function(num) {
	var resultArr = [];
	var checkedSqrt = false;

	function findAllPrimes(num) {
		if (!checkedSqrt) {
			checkedSqrt = true;
			if (Math.sqrt(num) % 1 === 0) {
				resultArr.push(Math.sqrt(num));
			}
		}

		if (num % 2 === 0) {
			if (resultArr.indexOf(2) === -1) {
				resultArr.push(2);
			}
			findAllPrimes(num / 2);
		} else if (num % 3 === 0) {
			if (resultArr.indexOf(3) === -1) {
				resultArr.push(3);
			}
			findAllPrimes(num / 3);
		} else {
			resultArr.push(num);
		}
	};

	findAllPrimes(num);

	if (resultArr.length === 1) {
		return num + ' has no prime factors';
	}

	return resultArr.sort(function(a, b) {
		return a - b;
	});
};

// **Next Prime Number** - Have the program find prime numbers until the user chooses to stop asking for the next one.

var findNextPrime = function() {
	var result, tempNum;
	var userInput;
	var isInitialRun = true;
    var continueToRun = true;
    var runCount = 0;
    
    userInput = prompt('Please input a number you would like to start your search from.');
    
	while (isInitialRun) {

		if (Number(userInput) === NaN) {
			alert('Please input a real NUMBER.');
		} else {
            tempNum = Number(userInput);
            isInitialRun = false;
        }
    };
    
	while (continueToRun || runCount < 3) {

        if (runCount === 0) {
            result = findNextPrime(tempNum);
            
            userInput = prompt(result + ' is your next Prime Number. Would you like to find the next? (y/n)').toLowerCase();
        } else {
            userInput = prompt('Would you like to find the next prime number? Enter y for yes, n for no.').toLowerCase();
        }

		if (userInput === 'n') {
			continueToRun = false;
		}

		if (userInput === 'y') {
            tempNum = result;
        }

        runCount += 1;
        alert('Not a correct input. Please try again. ' (3 - runCount) + ' before automatic quit.')

    };
    
    if (runCount === 3) {
        return alert('Program has automatically exited due to continuous incorrect inputs');
    }

    return alert('Your last Prime number was ' + result + '. Program will now end.');

	function findNextPrimeNumber(num) {
        if (num % 2 === 0) {
            findNextPrimeNumber(num);
        } else if (num % 3 === 0) {
            findNextPrimeNumber(num);
        } else {
            if (Math.sqrt(num) % 1 === 0) {
                findNextPrimeNumber(num);
            }

            return num;
        }
	};
};

findNextPrime();

// **Find Cost of Tile to Cover W x H Floor** - Calculate the total cost of tile it would take to cover a floor plan of width and height, using a cost entered by the user.

// **Mortgage Calculator** - Calculate the monthly payments of a fixed term mortgage over given Nth terms at a given interest rate. Also figure out how long it will take the user to pay back the loan. For added complexity, add an option for users to select the compounding interval (Monthly, Weekly, Daily, Continually).

// **Change Return Program** - The user enters a cost and then the amount of money given. The program will figure out the change and the number of quarters, dimes, nickels, pennies needed for the change.

// **Binary to Decimal and Back Converter** - Develop a converter to convert a decimal number to binary or a binary number to its decimal equivalent.

// **Calculator** - A simple calculator to do basic operators. Make it a scientific calculator for added complexity.

// **Unit Converter (temp, currency, volume, mass and more)** - Converts various units between one another. The user enters the type of unit being entered, the type of unit they want to convert to and then the value. The program will then make the conversion.

// **Alarm Clock** - A simple clock where it plays a sound after X number of minutes/seconds or at a particular time.

// **Distance Between Two Cities** - Calculates the distance between two cities and allows the user to specify a unit of distance. This program may require finding coordinates for the cities like latitude and longitude.

// **Credit Card Validator** - Takes in a credit card number from a common credit card vendor (Visa, MasterCard, American Express, Discoverer) and validates it to make sure that it is a valid number (look into how credit cards use a checksum).

// **Tax Calculator** - Asks the user to enter a cost and either a country or state tax. It then returns the tax plus the total cost with tax.

// **Factorial Finder** - The Factorial of a positive integer, n, is defined as the product of the sequence n, n-1, n-2, ...1 and the factorial of zero, 0, is defined as being 1. Solve this using both loops and recursion.

// **Complex Number Algebra** - Show addition, multiplication, negation, and inversion of complex numbers in separate functions. (Subtraction and division operations can be made with pairs of these operations.) Print the results for each operation tested.

// **Happy Numbers** - A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers. Display an example of your output here. Find first 8 happy numbers.

// **Number Names** - Show how to spell out a number in English. You can use a preexisting implementation or roll your own, but you should support inputs up to at least one million (or the maximum value of your language's default bounded integer type, if that's less). *Optional: Support for inputs other than positive integers (like zero, negative integers, and floating-point numbers).*

// **Coin Flip Simulation** - Write some code that simulates flipping a single coin however many times the user decides. The code should record the outcomes and count the number of tails and heads.

// **Limit Calculator** - Ask the user to enter f(x) and the limit value, then return the value of the limit statement *Optional: Make the calculator capable of supporting infinite limits.*

// **Fast Exponentiation** - Ask the user to enter 2 integers a and b and output a^b (i.e. pow(a,b)) in O(lg n) time complexity.