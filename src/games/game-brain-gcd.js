import sample from '../index.js';

const letsPlayGcd = () => {
  const displayRules = () => {
    console.log('Find the greatest common divisor of given numbers');
  };

  const calculator = (num1, num2) => {
    for (let i = num1; i > 0; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
    }
    return undefined;
  };

  const getRandomNumber = () => Math.ceil(Math.random() * 33);

  const giveQuestAndAns = () => {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const question = `${a} ${b}`;
    const answer = calculator(a, b).toString();
    return [
      question,
      answer,
    ];
  };
  sample(displayRules, giveQuestAndAns);
};
export default letsPlayGcd;
