import getGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const task = 'What number is missing in the progression?';

const buildProgression = (begin, step, length) => {
  const result = [begin];
  for (let i = 1; i < length; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const buildRoundData = () => {
  const begin = getRandomNumber(33);
  const step = getRandomNumber(5);
  const length = getRandomNumber(5, 10);

  const progression = buildProgression(begin, step, length);
  const hiddenNumber = getRandomNumber(1, progression.length - 1);

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
  getGameEngine(task, buildRoundData);
};
export default playProgressionGame;
