const getRandomNumber = (minNum = 1, maxNum = 33) => {
  const num = Math.random() * (maxNum - minNum + 1) + minNum;
  return Math.floor(num);
};
export default getRandomNumber;
