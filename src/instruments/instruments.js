export const getRandomOperator = (arr) => {
  const index = Math.ceil(Math.random() * arr.length - 1);
  return arr[index];
};

export const getRandomNumber = (num) => Math.ceil(Math.random() * num);

