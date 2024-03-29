import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const task = 'What is the result of the expression?';

const getCalculations = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: '${operator}'`);
  }
};

const operations = ['+', '-', '*'];

const buildRoundData = () => {
  const randomIndex = getRandomNumber(0, operations.length - 1);
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  const randomOperator = operations[randomIndex];

  const question = `${firstNum} ${randomOperator} ${secondNum}`;

  const answer = getCalculations(firstNum, secondNum, randomOperator).toString();

  return [
    question,
    answer,
  ];
};

const playCalcGame = () => {
  getGameEngine(task, buildRoundData);
};
export default playCalcGame;
