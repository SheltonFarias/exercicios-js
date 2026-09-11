/*
  Exercício: Nota de Aprovação
  Nível: Fácil
  Tópico: if

  Solicite uma nota de 0 a 10. Exiba se a pessoa está aprovada (nota ≥ 7) ou
  reprovada (nota < 7).
*/

// Escreva sua solução aqui

const notice = (number) => {
  if(number >= 7) {
    console.log("Aprovado")
  } else {
    console.log("Reporovado")
  }
}

notice(10)
console.log("-----------")
console.log("-----------")
notice(5)
console.log("-----------")
console.log("-----------")
notice(7)