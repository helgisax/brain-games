import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const buildRoundData = () => {
  const randomNumber = getRandomNumber(1, 33);
  const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    } return false;
  };
  const currentAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [
    randomNumber,
    currentAnswer,
  ];
};

const playEvenGame = () => {
  getGameEngine(rules, buildRoundData);
};
export default playEvenGame;
