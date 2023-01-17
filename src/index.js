import readlineSync from 'readline-sync';
// надо ли сюда импортировать функции из папки games? пока не ясно как это всё связать между собой.

const sample = (/* сюда аргумент с consolelog и правилами, но пока не понимаю, откуад его брать. rules*/) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const checkTheGame = () => {
    for (let i = 0; i < 3; i += 1) {
      const userAnswer = readlineSync.question('Your answer: ');

//вот сюда по идее надо втыкать функцию-вопрос, которая должна как-то вернуть видимо праивльный ответ, но я пока не оч понимаю механизм взаимодействия функций между собой и как сделать так, чтобы у меня в этой функции тоже появился правильный ответ, и чтобы они синхронизировались ещё

      if (currentAnswer === userAnswer) {
        console.log('Correct');
      } else if (currentAnswer !== userAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${currentAnswer}. Let's try again, ${userName}`);
        break;
      }
      console.log(`Congratulations, ${userName}!`);
    }
  };
  checkTheGame();
};
export default sample;
