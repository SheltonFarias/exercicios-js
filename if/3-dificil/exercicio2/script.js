function triangulo(a, b, c) {
  if(a + b < c || b + c < a || c + a < b) {
    console.log("Triangulo invalido")
  } else if(a === b && b === c) {
    console.log("Triangulo Equilatero")
  } else if(a === b || b === c || c === a) {
    console.log("Triangulo Isóceles")
  } else if(a !== b && b !== c && c !== a) {
    console.log("Triangulo Escaleno")
  }
}

triangulo(5, 5, 5)