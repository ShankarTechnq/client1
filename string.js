 function reverse_a_number(num) {
    let reversed_num = 0;
    while (num !== 0) {
      reversed_num = reversed_num * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    return reversed_num;
  }
  const num = 170910263;
  console.log("Original number: "+num);
  const result = reverse_a_number(num);
  console.log("Reversed number: "+result);

  function sum_Of_Digits(n) {
    if (n < 0) n = -n
    let result = 0
  
    while (n > 0) 
     {
      result += n % 10
      n = Math.floor(n / 10)
    }
  
    return result
  }
  console.log(sum_Of_Digits(263))
  console.log(sum_Of_Digits(55))
  console.log(sum_Of_Digits(25))
  
  
  
  // program to generate fibonacci series up to n terms
  // take input from the user

  const number = parseInt(prompt('Enter the number of terms: '));
  let n1 = 0, n2 = 1, nextTerm;
  console.log('Fibonacci Series:');
  for (let i = 1; i <= number; i++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }



// program to check an Armstrong number of three digits

let sum = 0;
const number1 = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);

}
else {
    console.log(`${number} is not an Armstrong number.`);
}


