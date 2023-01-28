import sample from '../index.js';
import { getRandomNumber, getRandomOperator } from '../instruments/instruments.js';

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

  const giveQuestAndAns = () => {
    const operaions = ['+', '-', '*'];
    const theRandomOperator = getRandomOperator(operaions);
    const a = getRandomNumber(33);
    const b = getRandomNumber(33);
    const currentOperator = theRandomOperator;
    const question = `${a} ${currentOperator} ${b}`;
    const answer = calculator(a, b, currentOperator).toString();
    return [
      question,
      answer,
    ];
  };
  sample(displayRules, giveQuestAndAns);
};
export default letsPlayCalc;
