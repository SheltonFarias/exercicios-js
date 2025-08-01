function icm(n) {
  if(n < 18.5) {
    console.log("Abaixo do peso")
  } else if(n >= 18.5 && n <= 24.9) {
    console.log("Peso normal")
  } else if(n >= 25 && n <=29.9) {
    console.log("Sobrepeso")
  } else if(n >= 30) {
    console.log("Obesidade")
  }
}

icm(25)