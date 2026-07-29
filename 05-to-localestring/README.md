# to localeString


## ✅ Nível Fácil

1. **Formatar número com separadores de milhar (Brasil)** — Peça ao usuário um número grande (ex: 1234567.89) e formate-o no padrão brasileiro com `toLocaleString('pt-BR')`.
2. **Mostrar data no formato brasileiro** — Mostre a data atual formatada como "dd/mm/aaaa", usando `toLocaleString()` com a linguagem `pt-BR`.
3. **Formatar valor em reais (BRL)** — Peça um valor numérico e mostre-o como moeda no formato brasileiro (ex: R$ 1.234,56).
4. **Mostrar hora atual em português (12h)** — Exiba a hora atual no formato `pt-BR`, incluindo horas e minutos no formato de 12 horas com AM/PM.

## 🟡 Nível Médio

1. **Converter data em vários formatos de países** — Peça uma data e mostre a formatação dela nos padrões `en-US`, `pt-BR`, `fr-FR` e `ja-JP`, para mostrar como muda conforme a localidade.
2. **Valor formatado em dólar, euro e iene** — Peça um valor e mostre o mesmo formatado como moeda para: - Dólar (USD - `en-US`) - Euro (EUR - `de-DE`) - Iene (JPY - `ja-JP`)
3. **Data com nome do mês por extenso** — Formate uma data de forma que o mês apareça por extenso, como "13 de junho de 2025".
4. **Número com diferentes estilos de formatação** — Mostre um mesmo número formatado com estilo decimal, percentual e notação científica, usando `toLocaleString()` com as opções apropriadas.

## 🔴 Nível Difícil

1. **Mostrar um valor com diferentes moedas e casas decimais customizadas** — Peça um valor e mostre o mesmo com: - 2 casas decimais (padrão) - Sem casas decimais - Com 4 casas decimais - E em moedas distintas (ex: BRL, USD, EUR)
2. **Tabela com datas formatadas de um array** — Dado um array de datas (strings ou objetos `Date`), crie uma lista onde cada item mostre a data no formato `"quarta-feira, 13 de junho de 2025"`.
3. **Simulador de compras internacionais** — Usuário escolhe um país (ex: EUA, Japão, Alemanha) e insere um valor. Exiba o valor formatado com a moeda local do país escolhido.
4. **Formatar horário para diferentes fusos** — Exiba a hora atual convertida para pelo menos três fusos horários diferentes (ex: América/São_Paulo, Europa/Berlin, Ásia/Tokyo) com `toLocaleString()` e a opção `timeZone`.
