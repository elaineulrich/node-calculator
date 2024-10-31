function Operation() {
  const operation = readline.question('What operation would you like to perform? (/, *, +): ');
  if (operation !== '/' && operation !== '*' && operation !== '+') {
      console.log('That is not a valid operation');
      return getOperation();  }
  return operation;
}
function getNumber(prompt) {
  const num = readline.question(prompt);
  if (isNaN(num)) {
      console.log('This is not a number');
      return getNumber(prompt);    }
  return parseFloat(num);
}
function performOperation(operation, num1, num2) {
  let result;
  switch (operation) {
      case '/':
          result = num1 / num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '+':
          result = num1 + num2;
          break;
      default:
          return 'Invalid operation';    }
  return result;
}
function calculator() {
  const operation = Operation();
  const num1 = getNumber('Please enter the first number: ');
  const num2 = getNumber('Please enter the second number: ');
  const result = performOperation(operation, num1, num2);
  console.log(`The result is: ${result}`);
}
calculator();