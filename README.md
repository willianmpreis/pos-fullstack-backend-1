[⬅ Voltar ao índice da disciplina](https://github.com/willianmpreis/pos-fullstack-backend-1/tree/main)

# Pós-Graduação em Desenvolvimento Full Stack — Desenvolvimento Backend I

Repositório destinado ao versionamento das atividades, exercícios práticos e avaliações desenvolvidos durante a disciplina de **Desenvolvimento Backend I**.

---

## Avaliação 01 — Catálogo de Oficinas

> **Nota de escopo:** A estrutura, a arquitetura de arquivos e os recursos tecnológicos empregados neste projeto foram desenvolvidos em estrita conformidade com as especificações exigidas pelo documento oficial da avaliação e seguindo as melhores práticas apresentadas nas aulas da disciplina.

---

## 🚀 Tecnologias e Ferramentas Utilizadas

O projeto foi construído utilizando exclusivamente a stack obrigatória da disciplina:
* Node.js
* Express & Express Generator
* Handlebars (para renderização de views no servidor)
* Bootstrap (versão offline incorporada para estilização e componentes visuais)[cite: 2, 3]

---

## 🛠️ Funcionalidades Implementadas

* **Catálogo em Memória:** Armazenamento estruturado em módulos utilizando objetos JavaScript assíncronos.
* **Painel de Indicadores:** Cálculo dinâmico em tempo real de total de oficinas, abertas, encerradas e somatório de carga horária das ativas.
* **Filtro de Inscrições:** Alternância rápida entre a visualização completa ("Todas as Oficinas") e apenas as com "Inscrições Abertas".
* **CRUD Completo:** Cadastro, consulta detalhada (com suporte a quebras de linha via `<pre>`), edição e exclusão protegida por janela modal do Bootstrap.
* **Gerenciamento de Situação:** Alternância ágil entre abrir/encerrar inscrições diretamente pela tabela principal.
* **Pesquisa por Título:** Busca sensível e flexível baseada no termo digitado pelo usuário.[cite: 1, 2]

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação na sua máquina:

### 1. Pré-requisitos
* Ter o [Node.js](https://nodejs.org/) instalado.
* Ter o **Express Generator** instalado (`npm install -g express-generator`).

### 2. Passos para execução
```bash
# 1. Clone o repositório e acesse a pasta do projeto
git clone [https://github.com/willianmpreis/pos-fullstack-backend-1.git](https://github.com/willianmpreis/pos-fullstack-backend-1.git)
cd pos-fullstack-backend-1

# 2. Mude para a branch da Avaliação 01
git checkout avaliacao-01

# 3. Instale as dependências
npm install

# 4. Inicie a aplicação
npm start