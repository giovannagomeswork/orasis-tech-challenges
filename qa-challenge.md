# Desafio Técnico QA (Gherkin&Cypress) — nopCommerce Admin Demo

## 🧠 Descrição
Avaliar sua capacidade de **planejar, propor cenários de teste em Gherkin** e **automatizá-los com Cypress** em um sistema real (nopCommerce Admin Demo).
O desafio não é apenas escrever código, mas também **pensar como QA**: identificar riscos, definir cenários de valor e documentar claramente as suas escolhas.


## 📄 O que você deve entregar
1. **Arquivo Markdown (`SCENARIOS.md`)**  
   - Com pelo menos **10 cenários escritos em Gherkin** (sua autoria).  
   - Inclua: objetivo, pré-condições, passos e critérios de aceitação.  
   - Você pode usar tags para organização (ex.: `@auth`, `@customers`, `@orders`).  

2. **Automação em Cypress**  
   - Implementar os cenários propostos.  
   - Estruturar pastas e testes de forma organizada.  
   - Utilizar boas práticas de seletores (`data-*` quando possível, ou IDs estáveis).  
   - Sincronizar corretamente os testes (`cy.intercept`, asserts de elementos visíveis).  
   - Evitar uso de `cy.wait(XXXX)` fixo.

3. **README.md** com:  
   - Instruções de instalação e execução dos testes (`cypress open` e `cypress run`).  
   - Como rodar em CI (ex.: exemplo de workflow no GitHub Actions).  
   - Estratégia de testes: explique **por que escolheu esses cenários** e o que ficou fora de escopo.  
   - Riscos identificados (flakiness, limitações do ambiente demo, bugs).  
   - (Opcional) Matriz de rastreabilidade (cenário → arquivo → assert principal).

4. **Evidências**  
   - Relatório de execução (Allure, Mochawesome, opcional mas bem-vindo).  
   - Screenshots e vídeos gerados com evidência da execução dos testes automatizados.

---

## 🧪 Escopo mínimo sugerido
Você deve propor os **cenários em Gherkin** e a **automação** que cubra, no mínimo, as seguintes áreas:
- **Autenticação & sessão** (login/logout, remember me, fluxo negativo)  
- **Navegação e menus**  
- **Listagens com filtros e paginação** (Customers, Orders ou Products)  
- **CRUD leve** (ex.: criação/edição de um Customer)  
- **Exportação/download** (CSV/Excel)  
- **Estado não-feliz** (erro, vazio, validação)

> Você pode ir além e propor cenários adicionais, como testes de acessibilidade ou combinações de filtros.  
> O importante é **mostrar como você pensa cobertura de QA**.

---

## 🎨 Recursos
| Recurso | Link |
|---|---|
| Sistema alvo | https://admin-demo.nopcommerce.com/admin/ |
| Credenciais demo | (pré-preenchidas na tela de login) |

---

## ⚙️ Instruções técnicas
- **Cypress** 12+ (recomendado 13+). TS opcional.  
- **Seletores**: priorize IDs/atributos estáveis; evite CSS frágil.  
- **Boas práticas**:
- AAA (Arrange–Act–Assert), DRY, nomes expressivos.  
- Evite `cy.wait(XXXX)` fixo; prefira condições verificáveis.  
- **Dados de teste** randômicos e cleanup quando possível (ou documente limitações).  
- Relatórios (Allure/Mochawesome) e evidências (vídeos/screenshots).  

---

## 🚧 Restrições & dicas
- Não realizar ações claramente destrutivas.  
- Se o ambiente bloquear alguma ação, **documente suposição/limite** e ajuste o cenário com assertiva verificável.  
- Prefira asserts resilientes (sem acoplar em formatações frágis) **a menos** que a regra exija precisão.  

---

## 💬 Dúvidas?
Abra uma issue no repositório ou fale com o responsável pela vaga.  
Boa sorte — queremos ver **seu pensamento de QA** tanto quanto o código! 🚀
