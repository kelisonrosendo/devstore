/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      searchByQuery(query: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("searchByQuery", (query: string) => {
  cy.visit("http://localhost:3000");
  cy.get("input[name=q]").type(query).parent("form").submit();
});
