import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const buildRoundData = () => {
  const randomNumber = getRandomNumber(33);
  const currentAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [
    randomNumber,
    currentAnswer,
  ];
};

const playEvenGame = () => {
  getGameEngine(task, buildRoundData);
};
export default playEvenGame;
