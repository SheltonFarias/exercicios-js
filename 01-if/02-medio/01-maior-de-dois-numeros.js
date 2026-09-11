/*
  Exercício: Maior de Dois Números
  Nível: Médio
  Tópico: if

  Solicite dois números ao usuário. Informe qual deles é o maior ou se são iguais.
*/

// Escreva sua solução aqui

const largestNumber = (n1, n2) => {
  if(n1 > n2) {
    console.log(`${n1} maior que ${n2}`)
  } else if( n1 == n2) {
    console.log("Os numeros são iguais")
  } else {
    console.log(`${n1} menor que ${n2}`)
  }
}

largestNumber(10, 5)
console.log("-----------------")
console.log("-----------------")
largestNumber(5, 7)
console.log("-----------------")
console.log("-----------------")
largestNumber(5, 5)

// FEITOOOOOO