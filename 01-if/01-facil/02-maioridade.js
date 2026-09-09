/*
  Exercício: Maioridade
  Nível: Fácil
  Tópico: if

  Solicite a idade do usuário. Informe se ele é maior ou menor de idade
  (considerando 18 anos como o limite).
*/

// Escreva sua solução aqui


const Age = (number) => {
  if(number < 18) {
    console.log("Não Atingiu a maioridade")
  } else {
    console.log("Maior de Idade")
  }
}

Age(21)
console.log("----------------")
console.log("----------------")
Age(17)
console.log("----------------")
console.log("----------------")
Age(19)
console.log("----------------")
console.log("----------------")


// Resolvido