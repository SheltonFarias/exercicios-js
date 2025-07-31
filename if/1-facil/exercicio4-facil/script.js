function notaAprovacao(nota) {

  if(nota >= 7 && nota <= 10) {
    console.log('Voce foi aprovado')
  } else if(nota > 0 && nota < 7) {
    console.log("Voce foi Reprovado")
  } else {
    console.log("Informe a nota correta")
  }
}

notaAprovacao(11)

/* usado if para primeiro limitar a nota de 0 a 10 e atribuir um estado de aprovado ou reprovado */