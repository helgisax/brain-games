import sample from '../index.js';

const letsPlayCalc = () => {
  const displayRules = () => {
    console.log('What is the result of the expression?');
  };
  const calculator = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        break;
    }
  };

  const theRandomNumber = Math.ceil(Math.random() * 33);
  const operaions = ['+', '-', '*'];
  const theRandomOperator = Math.ceil(Math.random() * operaions.length);

  const giveQuestAndAns = () => {
    const a = theRandomNumber;
    const b = theRandomNumber;
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
