# Projeto de Integração: Formulário de Cadastro de Dev

Este é um projeto básico que implementa um formulário de cadastro de desenvolvedores utilizando **HTML**, **CSS** e **JavaScript**. O objetivo principal é testar a integração contínua com o **GitHub Actions**, garantindo que os testes automatizados sejam executados toda vez que um novo deploy for realizado.

## ✨ Funcionalidades

- Formulário interativo para cadastro de desenvolvedores.
- Validação de campos com JavaScript.
- Integração com o **Cypress** para automação de testes.
- Pipeline de integração contínua configurado no **GitHub Actions** para rodar os testes automaticamente após cada deploy.

---

## 🚀 Tecnologias Utilizadas

- **HTML**: Para a estrutura da aplicação.
- **CSS**: Para estilização do formulário.
- **JavaScript**: Para validações e funcionalidades do formulário.
- **Cypress**: Para automação de testes end-to-end.
- **GitHub Actions**: Para integração contínua e execução automática de testes.

## 📖 Como Usar o Formulário

1. Abra o projeto no navegador.
2. Preencha as informações solicitadas no formulário:
   - **Nome**: Informe seu nome completo.
   - **E-mail**: Insira um e-mail válido.
   - **Linguagens de Programação Favoritas**: Escolha ou digite suas linguagens favoritas.
3. Clique no botão **Enviar**.
4. O sistema irá:
   - Validar os campos preenchidos.
   - Exibir mensagens de sucesso em caso de preenchimento correto ou mensagens de erro para correções necessárias.

## 🧪 Como Executar os Testes Automatizados

Siga os passos abaixo para configurar e executar os testes automatizados do projeto:

1. **Certifique-se de ter o Node.js instalado** em sua máquina.

2. **Instale as dependências do Cypress**:  
   Abra o terminal no diretório do projeto e execute o seguinte comando:  
   ```bash
   npm install

3. **Para abrir a interface gráfica do Cypress**:   
    Execute o comando abaixo no terminal:
    ```bash
    npx cypress open

4. **Para executar os testes diretamente no terminal (modo headless)**
    Use o comando:
    ```bash
    npx cypress run

5. **Execução automática com GitHub Actions:**
    Sempre que um novo deploy for realizado no repositório, o GitHub Actions será acionado automaticamente para executar os testes.
    O status dos testes pode ser monitorado na aba Actions do   repositório.

## ✉️ Contato

Dúvidas ou sugestões? Entre em contato pelos canais abaixo:

- **LinkedIn:** [Andreza Dias](https://www.linkedin.com/in/andreza-dias-3186a3146/)
