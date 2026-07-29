# Funções assíncronas


## ✅ Nível Fácil

1. **Criar uma função que retorna uma Promise que resolve após 2 segundos** — Implemente uma função que simula um atraso usando Promise e resolve depois de 2 segundos.
2. **Usar async/await para esperar uma Promise que retorna uma mensagem** — Crie uma função async que aguarda uma Promise que resolve uma string e imprime essa mensagem.
3. **Tratar erro em uma Promise que pode rejeitar** — Implemente uma função que pode rejeitar a Promise e capture o erro usando `try/catch`.
4. **Encadear duas Promises onde a segunda depende da primeira** — Faça duas operações assíncronas sequenciais, onde a segunda só começa depois que a primeira termina.

## 🟡 Nível Médio

1. **Fazer requisição simulada com delay e retornar dados de usuário** — Crie uma função async que simula uma requisição e retorna um objeto usuário após 3 segundos.
2. **Processar múltiplas Promises em paralelo com Promise.all** — Dado um array de Promises, aguarde todas resolverem e retorne os resultados juntos.
3. **Implementar timeout para uma Promise que pode demorar muito** — Crie uma função que rejeita a Promise se ela não resolver em um determinado tempo.
4. **Criar uma função que repete uma operação assíncrona até sucesso ou limite de tentativas** — Implemente uma função que tenta executar uma Promise várias vezes até obter sucesso ou atingir limite.

## 🔴 Nível Difícil

1. **Consumir dados de múltiplas APIs de forma sequencial usando async/await** — Simule chamadas a APIs que devem ser feitas uma após a outra, processando cada resultado.
2. **Implementar controle de concorrência limitando número de Promises paralelas** — Crie uma função que executa várias Promises, mas só permite, por exemplo, 3 rodando ao mesmo tempo.
3. **Criar uma fila assíncrona onde as tarefas são executadas uma a uma** — Implemente uma fila que aceita funções assíncronas e as executa sequencialmente.
4. **Tratar erros de múltiplas Promises sem parar toda a execução** — Execute várias Promises simultâneas e capture os erros individualmente, sem interromper as outras.
