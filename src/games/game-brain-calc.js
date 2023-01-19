import sample from '../index.js';

const letsPlayCalc = () => {
  const displayRules = () => {
    console.log('What is the result of the expression?');
  };
  const calculator = (num1, num2, operator) => {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default: break;
    }
    return result;
  };

  const getRandomOperator = (arr) => {
    const index = Math.ceil(Math.random() * arr.length - 1);
    return arr[index];
  };

  const getRandomNumber = () => Math.ceil(Math.random() * 33);

  const giveQuestAndAns = () => {
    const operaions = ['+', '-', '*'];
    const theRandomOperator = getRandomOperator(operaions);
    const a = getRandomNumber();
    const b = getRandomNumber();
    const currentOperator = theRandomOperator;
    const question = `${a} ${currentOperator} ${b}`;
    const answer = calculator(a, b, currentOperator);
    return [
      question,
      answer,
    ];
  };
  sample(displayRules, giveQuestAndAns);
};
export default letsPlayCalc;
