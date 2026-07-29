# Async e await


## ✅ Nível Fácil

1. **Criar uma função async que retorna uma string simples** — Faça uma função marcada com `async` que retorna uma mensagem.
2. **Esperar uma Promise que resolve após 2 segundos usando `await`** — Implemente uma função async que aguarde uma Promise que demora 2 segundos para resolver.
3. **Usar `try/catch` dentro de uma função async para capturar erros** — Crie uma função async que captura erros lançados por Promises rejeitadas.
4. **Encadear duas chamadas assíncronas com `await`** — Faça duas chamadas de funções async sequenciais, usando `await` para esperar a primeira terminar antes de começar a segunda.

## 🟡 Nível Médio

1. **Buscar dados simulados com atraso usando async/await** — Simule uma função async que retorna dados de usuário após 3 segundos.
2. **Executar múltiplas Promises paralelas com `Promise.all` e `await`** — Use `await Promise.all()` para esperar várias Promises simultâneas e processar os resultados.
3. **Implementar timeout para uma operação async que pode demorar demais** — Crie uma função async que rejeita se o tempo máximo for excedido.
4. **Repetir uma operação async até o sucesso ou limite de tentativas** — Faça uma função que chama uma Promise async várias vezes até que ela resolva ou atinja limite de tentativas.

## 🔴 Nível Difícil

1. **Consumir APIs simuladas sequencialmente com async/await** — Chame várias funções async que simulam APIs em sequência, esperando a anterior terminar.
2. **Controlar concorrência limitando número de Promises rodando ao mesmo tempo** — Crie uma função que executa várias tarefas async, mas só deixa rodar 3 de cada vez.
3. **Criar uma fila assíncrona que executa funções async uma a uma** — Implemente uma fila que aceita funções async e as executa sequencialmente.
4. **Tratar erros individuais em múltiplas Promises com async/await** — Execute várias Promises em paralelo e capture erros de cada uma sem parar a execução das outras.
