function anoBisexto(ano) {
  if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
    console.log("O ano é Bisexto")
  } else {
    console.log("Ano não é Bisexto")
  }
}

anoBisexto(2024)