/*
  Exercício: Múltiplo de 3 e 5
  Nível: Médio
  Tópico: if

  Peça um número inteiro e informe se ele é múltiplo **ao mesmo tempo** de 3 e de
  5.
*/

// Escreva sua solução aqui

const multiple = (n) => {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log(`O número ${n} é multiplo de 3 e 5`);
  } else if (n % 3 == 0 && n % 5 != 0) {
    console.log(`O número ${n} é multiplo apenas de 3`);
  } else if (n % 3 != 0 && n % 5 == 0) {
    console.log(`O número ${n} é multiplo apenas de 5`);
  } else {
    console.log(`O número ${n} não é multiplo 3 e/ou 5`)
  }
}

multiple(10)
console.log("----------")
console.log("----------")
multiple(15)
console.log("----------")
console.log("----------")
multiple(9)
console.log("----------")
console.log("----------")
multiple(7)

// FEITOOOOOO