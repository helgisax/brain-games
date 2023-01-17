const giveQuestAndAns = () => {
  const theRandomNumber = Math.ceil(Math.random() * 33);
  const currentAnswer = theRandomNumber % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${theRandomNumber}`);
  return currentAnswer;
};
export default giveQuestAndAns;
