# 📊 Desafio Técnico Frontend — Dashboard de Métricas

## 🧠 Descrição

Este desafio tem como objetivo avaliar suas habilidades de desenvolvimento frontend implementando uma funcionalidade de visualização de métricas administrativas no dashboard principal da plataforma.

Você irá consumir um JSON de dados fornecido (esse JSON pode ser alterado), seguir um layout no Figma e criar um painel com **cards informativos**.

Nesse desafio, teremos dois cenarios de teste para a funcionalidade, onde o Cenário 1 é obrigatório e o Cenário 2 é opcional.

---

## 📌 Funcionalidade

### **História do usuário**

> Como administrador do sistema,  
> Eu quero visualizar métricas resumidas dos usuários,  
> Para que eu possa acompanhar o crescimento e status geral da plataforma.

---

## 🧪 Cenários esperados

### ✅ Cenário 1: Exibir métricas resumidas em cards

- Dado que estou autenticado como administrador  
- Quando acesso o dashboard principal  
- Então devo visualizar:
  - Um card com o **total de usuários**
  - Um card com a **quantidade de usuários ativos**
  - Um card com a **quantidade de usuários inativos**
  - Um card com a **quantidade de administradores**

### 🔄 (OPCIONAL) Cenário 2: Atualização em tempo real

- Dado que estou no dashboard  
- Quando há mudanças na base de usuários (criação, atualização de status, etc.)  
- Então os valores exibidos nos cards devem ser **atualizados automaticamente**, sem recarregar a página

---

## 🎨 Recursos fornecidos

| Recurso | Link |
|--------|------|
| 🔗 Exemplo de Dashboard (Pode escolher outro se desejar) | [link-aqui](https://www.figma.com/community/file/1152266255337829742/analytics-dashboard) |
| 📂 JSON com dados mockados (Pode ser alterado)| [link-aqui](https://github.com/orasis-holding/orasis-tech-challenges/tree/main/fixtures/frontend) |

---

## ⚙️ Instruções técnicas

- Você deve utilizar o framework Next.js
- Escrita de testes unitários
- Use boas práticas de CI/CD
- Use boas práticas de componentização, organização e escrita de código.
- O repositório deve conter um README com descrição e instruções claras de execução da aplicação
- É **opcional**, mas bem-vindo:
  - Utilizar a biblioteca de icones mui/material
  - Realizar deploy da aplicacao
  - Animações ou microinterações
  - Acessibilidade básica
  - Realizar a atualização em tempo real com **polling**, **websocket simulado** ou **eventos artificiais** (ex: `setInterval` alterando o mock).

---

## 💬 Dúvidas?

Em caso de dúvidas, entre em contato com o responsável pela vaga.

Boa sorte e bom código! 🚀