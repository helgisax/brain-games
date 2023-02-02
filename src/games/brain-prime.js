import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCalculations = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const buildRoundData = () => {
  const actualNum = getRandomNumber(2, 33);

  const answer = getCalculations(actualNum) ? 'yes' : 'no';
  return [
    actualNum,
    answer,
  ];
};

const playPrimeGame = () => {
  getGameEngine(rules, buildRoundData);
};
export default playPrimeGame;
