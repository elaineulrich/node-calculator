const readline = require('readline-sync');

function getOperation() {
  const operation = readline.question('What operation would you like to perform? (/, *, -, +, %): ');
  if (!['/', '*', '-', '+', '%'].includes(operation)) {
    console.log('That is not a valid operation');
    return getOperation(); // Retry
  }
  return operation;
}

function getNumber(prompt) {
  const input = readline.question(prompt);
  const number = parseFloat(input);

  if (isNaN(number)) {
    console.log('This is not a number');
    return getNumber(prompt); // Retry
  }

  return number;
}

function performOperation(operation, num1, num2) {
  switch (operation) {
    case '/':
      return num2 === 0 ? 'Cannot divide by zero' : num1 / num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '%':
      return num1 % num2;
    default:
      return 'Invalid operation';
  }
}

function calculator() {
  console.log('Welcome to the Terminal Calculator');

  // BONUS: allow user to input full expression
  const fullInput = readline.question('Enter an expression (e.g. 5 + 3) or press Enter to input step-by-step: ');
  let num1, num2, operation;

  if (fullInput.trim() !== '') {
    const parts = fullInput.trim().split(' ');
    if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[2]) || !['/', '*', '-', '+', '%'].includes(parts[1])) {
      console.log('Invalid expression format. Please try again.');
      return calculator();
    }

    num1 = parseFloat(parts[0]);
    operation = parts[1];
    num2 = parseFloat(parts[2]);
  } else {
    operation = getOperation();
    num1 = getNumber('Please enter the first number: ');
    num2 = getNumber('Please enter the second number: ');
  }

  const result = performOperation(operation, num1, num2);
  console.log(`The result is: ${result}`);
}

calculator();
