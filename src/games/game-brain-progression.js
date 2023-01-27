import sample from '../index.js';

const letsPlayProgression = () => {
  const displayRules = () => {
    console.log('What number is missing in the progression?');
  };

  const calculator = (begin, step, length) => {
    const result = [begin];
    for (let i = 1; i < length; i += 1) {
      result.push(result[i - 1] + step);
    }
    return result;
  };

  const getRandomNumber = (num) => Math.ceil(Math.random() * num);

  const giveQuestAndAns = () => {
    const actualBegin = getRandomNumber(33);
    const actualStep = getRandomNumber(5) + 1;
    const actualLength = getRandomNumber(10) + 5;
    const hiddenNumber = getRandomNumber(actualLength);

    const actualProgression = calculator(actualBegin, actualStep, actualLength);
    const hiddenAnswer = actualProgression[hiddenNumber];
    actualProgression[hiddenNumber] = '..';

    const question = actualProgression.join(' ');
    const answer = hiddenAnswer;
    return [
      question,
      answer,
    ];
  };
  sample(displayRules, giveQuestAndAns);
};
export default letsPlayProgression;
