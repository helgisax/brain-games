import getGameEngine from '../index.js';
import { getRandomNumber } from '../instruments/instruments.js';

const playProgressionGame = () => {
  const rules = 'What number is missing in the progression?';

  const calculator = (begin, step, length) => {
    const result = [begin];
    for (let i = 1; i < length; i += 1) {
      result.push(result[i - 1] + step);
    }
    return result;
  };

  const giveQuestAndAns = () => {
    const actualBegin = getRandomNumber(33);
    const actualStep = getRandomNumber(5) + 1;
    const actualLength = getRandomNumber(10) + 5;
    const hiddenNumber = getRandomNumber(actualLength);

    const actualProgression = calculator(actualBegin, actualStep, actualLength);
    const hiddenAnswer = actualProgression[hiddenNumber];
    actualProgression[hiddenNumber] = '..';

    const question = actualProgression.join(' ');
    const answer = `${hiddenAnswer}`;
    return [
      question,
      answer,
    ];
  };
  getGameEngine(rules, giveQuestAndAns);
};
export default playProgressionGame;
