import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers';

const getCalculations = (num1, num2) => {
  for (let i = num1; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return undefined;
};

const buildRoundData = () => {
  const firstNum = getRandomNumber(1, 33);
  const secondNum = getRandomNumber(33, 66);
  const question = `${firstNum} ${secondNum}`;
  const answer = getCalculations(firstNum, secondNum).toString();
  return [
    question,
    answer,
  ];
};

const PlayGcdGame = () => {
  getGameEngine(rules, buildRoundData);
};
export default PlayGcdGame;
