import sample from '../index.js';

const letsPlayGcd = () => {
  const displayRules = () => {
    console.log('Find the greatest common divisor of given numbers');
  };

  const calculator = (num1, num2) => {
    if (num1 === num2) {
      return num1;
    } if (num1 > num2) {
      const temp = num1;
      num1 = num2;
      num2 = temp;
    }
    return calculator(num1, num2 - num1);
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
