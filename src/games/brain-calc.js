import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What is the result of the expression?';

const getCalculations = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break; // throw new Error(`Unknown operation: '${operator}'`);
  }
};

const operations = ['+', '-', '*'];
const buildRoundData = () => {
  const randomIndex = getRandomNumber(0, 2);
  const firstNum = getRandomNumber(1, 33);
  const secondNum = getRandomNumber(1, 33);
  const randomOperator = operations[randomIndex];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const answer = getCalculations(firstNum, secondNum, randomOperator);
  return [
    question,
    answer,
  ];
};

const playCalcGame = () => {
  getGameEngine(rules, buildRoundData);
};
export default playCalcGame;
