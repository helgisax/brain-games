const getRandomNumber = (minNum, maxNum) => {
  const num = Math.random() * (maxNum - minNum + 1) + minNum;
  return Math.floor(num);
};
export default getRandomNumber;
