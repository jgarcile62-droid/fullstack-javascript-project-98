
import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const runGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  console.log('Responde el resultado de la operacion.');

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    const question = `${num1} + ${num2}`;
    const correctAnswer = num1 + num2;

    console.log(`Pregunta: ${question}`);
    const answer = readlineSync.question('Tu respuesta: ');

    if (Number(answer) === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentalo de nuevo, ${name}!`);
      process.exit(1);
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGame;