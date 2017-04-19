const getRandomLetters = (arraySize) => {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let newLetters = [];

  for (let i = 0; i < arraySize; i++) {
    let num =  Math.floor(Math.random() * (26 - 1)) + 1;
    newLetters.push(letters.charAt(num))
    }
    return newLetters;
  }

getRandomLetters(12)
