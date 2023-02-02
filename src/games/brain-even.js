import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const buildRoundData = () => {
  const randomNumber = getRandomNumber(1, 33);
  const currentAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [
    randomNumber,
    currentAnswer,
  ];
};

const playEvenGame = () => {
  getGameEngine(rules, buildRoundData);
};
export default playEvenGame;
