# Herança


## ✅ Nível Fácil

1. **Classe Animal e subclasses** — Crie uma classe `Animal` com propriedades `nome` e `idade`. Depois, crie duas subclasses: `Cachorro` e `Gato`, que herdam de `Animal`. Instancie objetos das subclasses e exiba as propriedades herdadas.
2. **Classe Veículo e subclasses** — Crie uma classe `Veiculo` com propriedade `marca`. Crie as subclasses `Carro` e `Moto`. Em cada subclasse, adicione uma propriedade extra, como `numeroDePortas` ou `cilindradas`.
3. **Classe Pessoa e tipos de Pessoa** — Implemente a classe `Pessoa` com `nome` e `cpf`. Crie as subclasses `Aluno` (com matrícula) e `Professor` (com especialidade).
4. **Classe Conta e herança bancária** — Crie a classe `Conta` com `saldo` e `titular`. Crie as subclasses `ContaCorrente` e `ContaPoupanca` com propriedades/métodos adicionais, como limite de saque.

## 🟡 Nível Médio

1. **Classe Funcionario com método sobrescrito** — Crie a classe `Funcionario` com `nome` e `salario`. Crie as subclasses `Desenvolvedor` e `Designer`, e sobrescreva o método `exibirDetalhes()` para incluir a área de atuação.
2. **Classe Produto com tipos específicos** — Implemente a classe `Produto` com `nome` e `preco`. Crie as subclasses `Livro` (com `autor`) e `Eletronico` (com `voltagem`). Use o `super` para reaproveitar o construtor base.
3. **Classe Usuario e herança de permissões** — Crie uma classe `Usuario` com `nome` e `email`. Crie as subclasses `Administrador` (com acesso total) e `Visitante` (com acesso restrito). Adicione um método `verPermissoes()` diferente em cada subclasse.
4. **Herança com chamada de método pai (`super`)** — Crie uma classe `SerVivo` com o método `respirar()`. Crie uma subclasse `Humano` que herda e usa `super.respirar()` antes de exibir uma mensagem adicional.

## 🔴 Nível Difícil

1. **Sistema de herança com múltiplas camadas** — Crie uma cadeia de herança com 3 níveis: `Pessoa` → `Funcionario` → `Gerente`. Cada nível deve ter propriedades e métodos próprios. Verifique como métodos e atributos são herdados e sobrescritos.
2. **Classe abstrata com método obrigatório** — Crie uma classe base `Transporte` com um método `mover()` que lança erro se não for implementado. Faça com que `Bicicleta`, `Carro` e `Avião` implementem esse método de forma diferente.
3. **Reaproveitamento de métodos em subclasses** — Crie uma classe `Formulario` com métodos `abrir()` e `fechar()`. Crie subclasses como `FormularioLogin` e `FormularioCadastro`, herdando e modificando parte do comportamento de `abrir()` com `super`.
4. **Herança em conjunto com polimorfismo** — Crie uma classe `Impressora` com um método `imprimir()`. Crie as subclasses `ImpressoraLaser`, `ImpressoraJatoTinta`, `Impressora3D`, cada uma sobrescrevendo `imprimir()` com comportamentos distintos. Em seguida, percorra um array de impressoras e chame `imprimir()` para cada uma (polimorfismo).
