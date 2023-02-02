import getGameEngine from '../index.js';
import { getRandomNumber } from '../instruments/instruments.js';

const playPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const calculator = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const giveQuestAndAns = () => {
    const actualNum = getRandomNumber(33);

    const question = actualNum;
    const answer = calculator(actualNum) === false ? 'no' : 'yes';
    return [
      question,
      answer.toString(),
    ];
  };
  getGameEngine(rules, giveQuestAndAns);
};
export default playPrimeGame;
