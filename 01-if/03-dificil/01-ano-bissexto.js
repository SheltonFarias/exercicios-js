/*
  Exercício: Ano Bissexto
  Nível: Difícil
  Tópico: if

  Solicite um ano ao usuário. Informe se ele é um ano bissexto ou não, usando as
  regras corretas para cálculo.
*/

// Escreva sua solução aqui

const bisexto = (year) => {
  if (year % 400 == 0) {
    console.log(`${year} é Ano bisexto`);
  } else if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} é Ano bisexto`);
  } else {
    console.log(`${year} Não é ano bisexto`);
  }
};


bisexto(2000)
console.log("----------")
console.log("----------")
bisexto(2001)
console.log("----------")
console.log("----------")
bisexto(2004)
console.log("----------")
console.log("----------")
bisexto(2072)


// FEITOOOOO