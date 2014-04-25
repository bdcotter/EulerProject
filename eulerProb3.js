// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

/* Thoughts: Find all prime factors, then find the largest of hte primes.
*/


//find the largest prime number it is divisible by//

// function isPrime(num){
// for(i =2;i<num;i++){
// 	if(num % i ===0){
// 		return false;
// 		}
// 	return true;

// 	}
// }

// var number = 600851475143;

// for (var j=2;j<number;j++){
// 	if(number % j ===0 && isPrime(j)) 
// 	{
// 	x= j;
// 	}
// }
// console.log(x);

// copied from another solution... trying to figure why it works....
var largestPrime = function (num) {
	var factors = [];
	var i = 2;
	while (num > 1)
	{
		while (num % i === 0)
		{
			factors.push(i);
			num /= i; //Why do we divide here? --- This allows us to break the largest divider into smaller numbers to reach the final prime factors [71,839,1471,6857]
			console.log(num,i);
		}
		i += 1;
	}
	console.log(factors);
	return factors[factors.length-1]; //return last element (which is the largest) in array of prime numbers

}

console.log(largestPrime(600851475143));

