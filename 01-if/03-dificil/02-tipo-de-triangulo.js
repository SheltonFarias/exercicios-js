/*
  Exercício: Tipo de Triângulo
  Nível: Difícil
  Tópico: if

  Peça três valores representando os lados de um triângulo. Verifique se formam um
  triângulo válido e, se sim, classifique como: - Equilátero (todos os lados
  iguais) - Isósceles (dois lados iguais) - Escaleno (todos diferentes)
*/

// Escreva sua solução aqui

const triangle = (a1, a2, a3) => {
  if(a1 + a2 > a3 && a1 + a3 > a2 && a2 + a3 > a1) {
    console.log("Voce tem um Triangulo")
  } else {
    console.log("Isso não é um triangulo")
  }
}