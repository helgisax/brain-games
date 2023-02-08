import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNummber = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const buildRoundData = () => {
  const actualNum = getRandomNumber(2, 33);

  const answer = isPrimeNummber(actualNum) ? 'yes' : 'no';
  return [
    actualNum,
    answer,
  ];
};

const playPrimeGame = () => {
  getGameEngine(task, buildRoundData);
};
export default playPrimeGame;
