# 🎁 Projeto de Sorteio no Terminal com TypeScript

## giveaway-project

Este projeto é uma aplicação interativa em **TypeScript** que realiza um **sorteio aleatório de uma pessoa** a partir de uma lista fornecida em um arquivo CSV. O vencedor é exibido com uma animação no terminal, utilizando bibliotecas como `terminal-kit` e `ora`.

---

## 📌 Objetivo

- Ler uma lista de participantes contendo nome e e-mail;
- Sortear **apenas um vencedor**, utilizando uma lógica de **eliminação aleatória**;
- Mostrar o vencedor no terminal com efeitos visuais e mascaramento de e-mail.

---

## 🧠 Como Funciona o Sorteio

A função `giveaway` realiza o sorteio com a seguinte lógica:

> Em vez de selecionar diretamente um vencedor, o sistema **elimina aleatoriamente um participante por vez** até que reste apenas um. Esse último participante restante é declarado o vencedor.

### 🔄 Exemplo simplificado:

1. Lista de participantes: A, B, C, D
2. Sorteios de eliminação (aleatórios):
   - Remove C
   - Remove A
   - Remove B
3. **D** é o último restante → **vencedor**

Essa abordagem torna o sorteio mais divertido e imprevisível!

---

## 📂 Estrutura do Projeto

```bash
src/
├── data/
│   └── data.csv
├── function/
│   ├── get-person.ts
│   └── giveawey.ts
├── model/
│   └── Person.ts
├── ui/
│   └── terminal.ts
└── index.ts
```

## 📄 Arquivo data.csv

- separar nome e e-mail com " **;** "

#### exemplos:

> João Silva;joao@email.com
> Maria Oliveira;maria@email.com
> Carlos Souza;carlos@email.com

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/AndreiVidal/giveaway-project.git
cd giveaway-project
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o programa

```bash
npm start
```

### 📷 Demonstração

<img src="./assets/givaway.gif" >

## 🛠 Tecnologias Utilizadas

- **Node.js**

- **TypeScript**

- **terminal-kit** — _para interação visual com o terminal_

- **ora** — _para spinners animados_
