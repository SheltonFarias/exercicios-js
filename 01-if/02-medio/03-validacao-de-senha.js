/*
  Exercício: Validação de Senha
  Nível: Médio
  Tópico: if

  Solicite uma senha ao usuário. Verifique se ela é igual a um valor fixo (por
  exemplo, `"1234"`). Mostre se o acesso foi autorizado ou negado.
*/

// Escreva sua solução aqui

const password = (pass) => {
  let pin = 1234

  if (pass === pin) {
    console.log("Login feito com Sucesso")
  } else {
    console.log("Não foi possivel fazer login")
  }
} 

password(1234)
console.log("----------------")
password(4321)

