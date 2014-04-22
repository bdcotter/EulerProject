// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Steps:
// 1. Find all numbers that are multiples of 3
// 2. Find all numbers that are multiples of 5
// 3. Add all these numbers

// Ways to find the multiples:
// 1. Check each number up to 1000 and see if it has a remainder when it is divided by 3
// 2. Create multiples (3x1, 3x2, up to 1000)
// 3. ?? FActors??

// Method 1: Runtime 0.3s

// var sum =0;
// for (i=-1;i<=1000;i++){
// 	if (i% 3 === 0 || i% 5 ===0){
// 	sum += i;
// 	console.log(i,sum);
// 	}
// }

// Method 2: Runtime 

var sum = 0;
var i=0;
while (i<=1000){
	j=3*i;
	h=5*i;
	i++;
	sum += (h+j);
	console.log(h,j,sum);
}


// console.log(sum);