export function randomInteger(min: number, max: number){

    const random = (Math.random() * (max - min)) + min
    // floor palauttaa kokonaisluvun
    return Math.floor(random)
  } 