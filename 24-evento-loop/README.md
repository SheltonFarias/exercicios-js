# evento loop


## ✅ Nível Fácil

1. **Explique a ordem de execução entre console.log() simples e setTimeout com 0ms** — Dado um código com um `console.log` seguido de um `setTimeout` com 0ms, qual mensagem aparece primeiro?
2. **Diferencie execução de código síncrono e assíncrono com exemplos de funções normais e setTimeout** — Analise o fluxo entre código síncrono e assíncrono usando `setTimeout`.
3. **Mostre a diferença entre callback síncrono e assíncrono** — Explique com exemplos simples quando um callback é executado imediatamente e quando é enfileirado.
4. **Identifique quando uma Promise é resolvida na fila de microtasks** — Explique em que momento do event loop uma Promise resolvida com `.then()` é executada.

## 🟡 Nível Médio

1. **Compare a ordem de execução entre setTimeout e Promise.resolve().then()** — Dado um código misturando `setTimeout` e Promises, explique qual callback roda primeiro e por quê.
2. **Descreva o que acontece quando funções síncronas chamam funções assíncronas** — Analise o fluxo do event loop quando uma função síncrona dispara uma Promise.
3. **Explique o conceito de macrotasks e microtasks com exemplos** — Demonstre quais tarefas vão para cada fila e como isso afeta a ordem de execução.
4. **Mostre o que acontece com várias Promises encadeadas e setTimeouts simultâneos** — Analise a ordem das execuções quando tem múltiplas Promises e múltiplos `setTimeout`.

## 🔴 Nível Difícil

1. **Analise um código complexo com várias Promises, setTimeouts e async/await** — Explique passo a passo a ordem de execução de cada linha e callback.
2. **Implemente um código que mostra claramente o funcionamento do event loop com macrotasks e microtasks** — Crie um exemplo que evidencie a diferença entre essas duas filas e como o event loop prioriza a execução.
3. **Simule um atraso no event loop com funções assíncronas e bloqueios síncronos** — Mostre o impacto de código síncrono pesado na execução de callbacks assíncronos.
4. **Descreva como o event loop lida com operações de I/O e timers em ambientes JavaScript (browser vs Node.js)** — Explique diferenças de implementação e como isso afeta o comportamento do event loop.
