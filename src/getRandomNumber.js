const getRandomNumber = (minNum, maxNum) => {
  const num = minNum - 0.5 + Math.random() * (maxNum - minNum + 1);
  return Math.ceil(num);
};
export default getRandomNumber;
