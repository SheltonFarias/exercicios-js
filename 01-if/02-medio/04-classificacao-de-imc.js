/*
  Exercício: Classificação de IMC
  Nível: Médio
  Tópico: if

  Peça ao usuário que informe seu valor de IMC. Classifique como: - Abaixo do peso
  (IMC < 18.5) - Peso normal (IMC entre 18.5 e 24.9) - Sobrepeso (IMC entre 25 e
  29.9) - Obesidade (IMC ≥ 30)
*/

// Escreva sua solução aqui

const imc = (n) => {
  if(n >= 25 && n <= 29.9) {
    console.log("Sobrepeso")
  } else if(n >= 30) {
    console.log("Obesidade")
  } else {
    console.log("Peso normal")
  }
}

imc(30)