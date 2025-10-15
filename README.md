# 🛍️ DevStore

DevStore é um projeto de e-commerce bem básico, desenvolvido para aprendizado na Rocketseat. Foi desenvolvida com **Next.js** e testada com **Cypress**.

O projeto consome a API pública de produtos [EscuelaJS API](https://api.escuelajs.co/api/v1/products) e possui integração com **GitHub Actions** para execução automática dos testes a cada commit.

---

## 🚀 Ferramentas Utilizadas

- **Next.js** — Framework React para aplicações web modernas e performáticas
- **Cypress** — Ferramenta de testes end-to-end e de integração
- **GitHub Actions** — CI/CD para execução dos testes automaticamente
- **API Pública:** [EscuelaJS Products API](https://api.escuelajs.co/api/v1/products)

---

## 📦 Funcionalidades

- Listagem de produtos em destaque
- Visualização de detalhes de um produto
- Adição fake de produto do carrinho
- Busca por produtos
- Integração com API pública
- Testes automatizados com Cypress
- Execução de testes contínua via GitHub Actions

---

## ⚙️ Como Rodar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/devstore.git

# Acessar a pasta do projeto
cd devstore

# Instalar as dependências
pnpm install

# Rodar o servidor de desenvolvimento
pnpm dev
```

## 🧪 Executando os Testes

```bash
# Rodar os testes em modo interativo
pnpm cypress open

# Rodar os testes em modo headless (sem interface)
pnpm cypress run
```

## ⚙️ Integração Contínua (GitHub Actions)

```bash
# Arquivo de configuração:
.github/workflows/tests.yml
```
