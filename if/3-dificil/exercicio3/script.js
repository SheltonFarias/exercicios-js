function horario(hr) {
  if(hr >= 6 && hr <= 11.59) {
    console.log("Bom dia")
  } else if(hr >= 12 && hr <= 17.59) {
    console.log("Boa tarde")
  } else if(hr >= 18 && hr <= 23.59) {
    console.log("Boa noite")
  } else if (hr >= 0 && hr <= 5.59) {
    console.log("Boa madrugada")
  } else {
    console.log("Horar invalida")
  }
}