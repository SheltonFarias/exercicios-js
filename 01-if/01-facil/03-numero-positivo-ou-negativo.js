/*
  Exercício: Número Positivo ou Negativo
  Nível: Fácil
  Tópico: if

  Peça um número ao usuário e informe se ele é positivo ou negativo. Considere
  zero como positivo.
*/

// Escreva sua solução aqui

const number = (n) => {
  if(n > 0) {
    console.log("Seu número é positivo")
  } else if (n == 0) {
    console.log("Numero igual a 0")
 } else {
  console.log("Seu número é Negativo")
 }
}

number(0)
console.log("------------")
console.log("------------")
console.log("------------")
number(-1)
console.log("------------")
console.log("------------")
console.log("------------")
number(10)
console.log("------------")
console.log("------------")
console.log("------------")
number(-5)

// FEITOOOOOOO