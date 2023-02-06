const getRandomNumber = (minNum, maxNum) => {
  const num = Math.random() * (maxNum - minNum + 1) + minNum;
  return Math.ceil(num);
};
export default getRandomNumber;
