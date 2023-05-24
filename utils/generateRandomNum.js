export const generateRandomNum = (min, max, exclude) => {
  let randomNum = parseInt(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return randomNum;
  }
};
