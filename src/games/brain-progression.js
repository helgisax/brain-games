import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What number is missing in the progression?';

const getCalculations = (begin, step, length) => {
  const result = [begin];
  for (let i = 1; i < length; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const buildRoundData = () => {
  const begin = getRandomNumber(1, 33);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);
  const hiddenNumber = getRandomNumber(1, length - 1);

  const progression = getCalculations(begin, step, length);
  const hiddenAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';

  const question = progression.join(' ');
  const answer = String(hiddenAnswer);
  return [
    question,
    answer,
  ];
};

const playProgressionGame = () => {
  getGameEngine(rules, buildRoundData);
};
export default playProgressionGame;
